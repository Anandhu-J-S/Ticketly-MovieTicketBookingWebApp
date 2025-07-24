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
        const profilePic = req.file ? req.file.path : null;

        //hash the password 
        const hashedPassword = await (bcrypt.hash(password, 10))
        // create a new user
        const newUser = new createUserModel({

            username,
            email,
            contact,
            password: hashedPassword,
            role,
            profilePic
        })
        await newUser.save();
        res.status(201)
            .json({ message: `Registration Success!!  Welcome ${username}` })
        console.log(`Registration Success!!  Welcome ${username}`)
    }
    catch (err) {
        res.status(500)
            .json({ message: `Registration failed !! Contact Admin!`, error: err.message })
        console.log(`Registration failed !! Contact Admin!`)
    }
}

export const userLogin = async (req, res) => {
    const { username, password } = req.body;

    const loginUser = await createUserModel.findOne({ username })

    //if username not found 
    if (!loginUser) {
        return res.status(404)
            .json({ message: `${username} does not exist!` })
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