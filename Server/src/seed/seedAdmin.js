import bcrypt from "bcryptjs";
import { createAdminSeedModel } from "../Models/adminSeedModel.js";
import dotenv from 'dotenv';
dotenv.config()

export const seedAdmin = async (req, res) => {
    try {
        const existingAdmin = await createAdminSeedModel.findOne({ adminName: process.env.ADMIN_USERNAME })

        if (!existingAdmin) {
            const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10)

            const newAdmin = new createAdminSeedModel({
                adminName: 'admin',
                password: hashedPassword,
                role: "admin"
            })
            await newAdmin.save();
            console.log('Default Admin created')
        } else {
            console.log("Admin Already Exists")
        }
    }
    catch (err) {
        console.log("Error seeding Admin",err)
    }
}
