import { createAdminSeedModel } from "../../Models/adminSeedModel.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
dotenv.config()

export const adminLogin = async (req, res) => {
    const { adminName, password } = req.body;

    const loginAdmin = await createAdminSeedModel.findOne({ adminName })

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



