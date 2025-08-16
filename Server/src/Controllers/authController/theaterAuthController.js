import { createTheaterSchema } from "../../Models/theaterModel.js";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import bcrypt from "bcryptjs";


dotenv.config()


export const theaterRegister = async (req, res) => {
    try {
        console.log("Uploaded file:", req.file);
        const { theaterName, email, address, password, location, contact, openingHours, numberOfscreens, role } = req.body;
        const image = req.file ? req.file.path : null;
        //hash password
        const hashedPassword = await (bcrypt.hash(password, 10))

        const newTheater = new createTheaterSchema({
            theaterName,
            email,
            address,
            password: hashedPassword,
            location,
            contact,
            openingHours,
            numberOfscreens,
            image,
            role
        })
        await newTheater.save();
        res.status(201)
            .json({ message: `Registration Success!! Welcome ${theaterName}` })
        console.log(`Registration Success!! Welcome ${theaterName}`)
    }
    catch (err) {
        res.status(500)
            .json({ message: `Registration failed !! Contact Admin!`, error: err.message })
        console.log(`Registration failed !! Contact Admin!`)
    }
}


export const theaterLogin = async (req, res) => {
    const { theaterName, password } = req.body;
    const loginTheater = await createTheaterSchema.findOne({ theaterName })

    if (!loginTheater) {
        return res.status(404)
            .json({ message: `Theater account with username ${theaterName} NOT found!` })
    }

    const isMatch = await bcrypt.compare(password, loginTheater.password)

    if (!isMatch) {
        return res.status(400)
            .json({ message: `Invalid Credentials` })
    }

    const token = jwt.sign(
        {
            id: loginTheater._id,
            role: loginTheater.role
        },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
    )
    res.status(200).json({ token })
}

//update theater profile

export const theaterUpdate = async (req, res) => {
    try {
        const theaterId = req.params.id;

        const { theaterName, email, password, address, location, contact, openingHours, numberOfscreens, role } = req.body;


        const updates = {};

        if (theaterName) updates.theaterName = theaterName;
        if (email) updates.email = email;
        if (password) {
            const hashedPassword = await bcrypt.hash(password, 10);
            updates.password = hashedPassword;
        }
        if (address) updates.address = address;
        if (location) updates.location = location;
        if (contact) updates.contact = contact;
        if (openingHours) updates.openingHours = openingHours;
        if (numberOfscreens) updates.numberOfscreens = numberOfscreens;
        if (role) updates.role = role;
        if (req.file) {
            updates.image = req.file.path;
        }

        const updatedTheater = await createTheaterSchema.findByIdAndUpdate(
            theaterId,
            { $set: updates },
            { new: true }
        )


        if (!updatedTheater) {
            return res.status(404)
                .json({ message: `Theater NOT found!` })
        }

        res.status(200)
            .json({ message: `Theater profile updated successfully!`, updatedTheater })

    }
    catch (err) {
        console.log(err);
        res.status(500)
            .json({ message: `Failed to update theater profile!` })
    }
}

//delete theater profile

export const deleteTheater = async (req, res) => {
    try {
        const theaterId = req.params.id;

        const deletedTheater = await createTheaterSchema.findByIdAndDelete(theaterId);

        if (!deletedTheater) {
            return res.status(404)
                .json({ message: `Theater not found` })
        }

        res.status(200)
            .json({ message: `Theater profile deleted successfully!` })
    }
    catch (err) {

    }
}