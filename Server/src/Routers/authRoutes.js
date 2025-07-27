import { Router } from "express";
import { userLogin, userRegister } from "../Controllers/authController/userAuthController.js";
import { upload } from "../middlewares/upload.js";
import { theaterLogin, theaterRegister } from "../Controllers/authController/theaterAuthController.js";
import { adminDelete, adminLogin, adminRegister, adminUpdate } from "../Controllers/authController/adminAuthController.js";

export const router = Router()


//user
router.post("/user/register", upload.single('profilePic'), userRegister)
router.post("/user/login", userLogin)


//theater
router.post("/theater/register", upload.single('image'), theaterRegister)
router.post("/theater/login", upload.none(), theaterLogin)


//admin
router.post("/admin/register", upload.single('profilePic'), adminRegister)
router.post("/admin/login", upload.none(), adminLogin)
router.put("/admin/update/:id", upload.single('profilePic'), adminUpdate)
router.delete("/admin/delete/:id", upload.none(), adminDelete)
