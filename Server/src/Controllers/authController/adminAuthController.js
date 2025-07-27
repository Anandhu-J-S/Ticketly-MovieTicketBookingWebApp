import { createAdminModel } from "../../Models/adminModel.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
dotenv.config()

//admin authController

export const adminRegister = async (req, res) => {
    try {
        const { adminName, email, password, role } = req.body;

        const profilePic = req.file ? req.file.path : null;


        //hashedPassword
        const hashedPassword = await (bcrypt.hash(password, 10))

        //create new Admin

        const newAdmin = new createAdminModel({
            profilePic,
            adminName,
            email,
            password: hashedPassword,
            role

        })
        await newAdmin.save()

        res.status(201)
            .json({ message: `Registration Success welcome ADMIN ${adminName}` })
        console.log(`Registration Success welcome ADMIN ${adminName}`)

    }
    catch (err) {
        res.status(500)
            .json({ message: `ADMIN Registration failed!!` })
    }
}

export const adminLogin = async (req, res) => {
    const { adminName, password } = req.body;

    const loginAdmin = await createAdminModel.findOne({ adminName })

    //if admin name not found

    if (!loginAdmin) {
        return res.status(404)
            .json({ message: `ADMIN with admin name ${adminName} NOT found!` })
    }

    const isMatch = await bcrypt.compare(password, loginAdmin.password)

    // if not matched

    if (!isMatch) {
        return res.status(400)
            .json({ message: `Invalid Credentials` })
    }

    const token = jwt.sign(
        {
            id: loginAdmin._id,
            role: loginAdmin.role
        },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
    )
    res.status(200).json({ token })
}

export const adminUpdate = async (req, res) => {
    try {
        const adminId = req.params.id;
        const { adminName, email, password, role } = req.body;

        const updates = {};

        if (adminName) updates.adminName = adminName;
        if (email) updates.email = email;
        if (role) updates.role = role;

        // If password is provided, hash it
        if (password) {
            const hashedPassword = await bcrypt.hash(password, 10);
            updates.password = hashedPassword;
        }

        // If profilePic file is uploaded
        if (req.file) {
            updates.profilePic = req.file.path;
        }

        const updatedAdmin = await createAdminModel.findByIdAndUpdate(
            adminId,
            { $set: updates },
            { new: true }
        );

        if (!updatedAdmin) {
            return res.status(404).json({ message: "Admin not found" });
        }

        res.status(200).json({
            message: "Admin profile updated successfully",
            updatedAdmin
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to update admin profile" });
    }
};

export const adminDelete = async (req, res) => {
    try {
        const adminId = req.params.id;

        const deletedAdmin = await createAdminModel.findByIdAndDelete(adminId);

        if (!deletedAdmin) {
            return res.status(404).json({ message: "Admin not found" });
        }

        res.status(200).json({ message: `Admin ${deletedAdmin.adminName} deleted successfully.` });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to delete admin" });
    }
};

