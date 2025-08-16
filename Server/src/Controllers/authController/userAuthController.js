import { createUserModel } from "../../Models/userModel.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()


//user authController

export const userRegister = async (req, res) => {
    try {
        console.log("Uploaded file:", req.file);
        const { username, email, contact, password, role } = req.body;
     const profilePic = req.file ? req.file.filename : null;


        //hash the password 
        const hashedPassword = await (bcrypt.hash(password, 10))
        // create a new user
        const newUser = new createUserModel({
            username,
            email,
            contact,
            password: hashedPassword,
            role,
            profilePic,
            status:"pending"
        })
        await newUser.save();
        res.status(201)
            .json({ message: `Registration Success!!  Welcome ${username}` })
        console.log(`Registration Success!!  Welcome ${username}`)
    }
    catch (err) {
        res.status(500)
            .json({ message: `Registration failed !! Contact Admin!`, error: err.message })
        console.log(`Registration failed !! Contact Admin!`,err.message)
    }
    
}


export const updateUserStatus = async (req, res) => {
    try {
        const userId = req.params.id;
        const { status } = req.body; // approved / rejected

        if (!["approved", "rejected"].includes(status)) {
            return res.status(400)
                .json({ message: "Invalid status. Must be 'approved' or 'rejected'" });
        }

        const updatedUser = await createUserModel.findByIdAndUpdate(
            userId,
            { status },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404)
                .json({ message: "User not found" });
        }

        res.status(200)
            .json({ message: `User status updated to ${status}`, user: updatedUser });
    } catch (err) {
        console.error(err);
        res.status(500)
            .json({ message: "Failed to update user status" });
    }
};

export const getPendingUsers = async (req, res) => {
    try {
        const users = await createUserModel.find({ status: "pending" });
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: "Error fetching pending users" });
    }
};



export const userLogin = async (req, res) => {
    const { username, password } = req.body;

    const loginUser = await createUserModel.findOne({ username })

    //if username not found 
    if (!loginUser.status !== "approved") {
        return res.status(404)
            .json({message:`Your account is ${loginUser.status}. Please contact admin.` })
    }else{
        console.log(`Welcome ${username}`)
    }
    //if matched
    const isMatch = await bcrypt.compare(password, loginUser.password)

    //if !matched

    if (!isMatch) {
        return res.status(400)
            .json({ message: "Invalid Credentials" })
    }

    //if matched generate token

    const token = jwt.sign(
        { id: loginUser._id, role: loginUser.role },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
    );
    res.status(200)
        .json({ token })
}

//update user profile

export const updatedUser = async (req, res) => {
    try {
        const userId = req.params.id;

        const { username, email, contact, password, role } = req.body;

        const updates = {};

        if (username) updates.username = username;
        if (email) updates.email = email;
        if (contact) updates.contact = contact;
        if (password) {
            const hashedPassword = await bcrypt.hash(password, 10)

            updates.password = hashedPassword;
        }
        if (req.file) {
            updates.profilePic = req.file.path;
        }
        if (role) updates.role = role;

        const updatedUser = await createUserModel.findByIdAndUpdate(
            userId,
            { $set: updates },
            { new: true }
        )

        if (!updatedUser) {
            return res.status(404)
                .json({ message: `User NOT found` })
        }
        res.status(200)
            .json({ message: `User updated successfully` })


    }
    catch (err) {
        console.log(err);
    }
}

export const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;

        const deletedUser = await createUserModel.findByIdAndDelete(userId)

        if (!deletedUser) {
            return res.status(404)
                .json({ message: `user NOT found!` })
        }

        res.status(200).json({ message: `user deleted successfully` })

    }
    catch (err) {
        console.log(err);
        res.status(500)
            .json({ message: `Failed to delete user!` })
    }
}