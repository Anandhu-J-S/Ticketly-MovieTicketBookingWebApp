import { Router } from "express";
import { userLogin, userRegister } from "../Controllers/authController/userAuthController.js";
import multer from 'multer'
const upload = multer()
export const router = Router()

router.post("/user/register",upload.none(),userRegister)
router.post("/user/login",userLogin)