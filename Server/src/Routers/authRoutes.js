import { Router } from "express";
import { userLogin, userRegister } from "../Controllers/authController/userAuthController.js";
import { upload } from "../middlewares/upload.js";

export const router = Router()

router.post("/user/register",upload.single('profilePic'),userRegister)
router.post("/user/login",userLogin)