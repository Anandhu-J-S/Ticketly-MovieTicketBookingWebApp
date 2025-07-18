import { Router } from "express";
import { login, register } from "../Controllers/authController/authController.js";
export const router = Router()

router.post("/register",register)
router.post("/login",login)