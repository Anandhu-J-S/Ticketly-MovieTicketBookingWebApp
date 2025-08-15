import { Router } from "express";
import { deleteUser, updatedUser, userLogin, userRegister } from "../Controllers/authController/userAuthController.js";
import { upload } from "../middlewares/upload.js";
import { deleteTheater, theaterLogin, theaterRegister, theaterUpdate } from "../Controllers/authController/theaterAuthController.js";
import { adminDelete, adminLogin, adminRegister, adminUpdate } from "../Controllers/authController/adminAuthController.js";
import { updateUserStatus } from "../Controllers/authController/userAuthController.js";
export const router = Router()


//user
router.post("/user/register", upload.single('profilePic'), userRegister)
router.post("/user/login",upload.none(), userLogin)
router.put("/user/update/:id",upload.single('profilePic'),updatedUser)
router.delete("/user/delete/:id",deleteUser)
router.patch('/user/status/:id',updateUserStatus)


//theater
router.post("/theater/register", upload.single('image'), theaterRegister)
router.post("/theater/login", upload.none(), theaterLogin)
router.put("/theater/update/:id",upload.single('image'),theaterUpdate)
router.delete("/theater/delete/:id",upload.none(),deleteTheater)


//admin
router.post("/admin/register", upload.single('profilePic'), adminRegister)
router.post("/admin/login", upload.none(), adminLogin)
router.put("/admin/update/:id", upload.single('profilePic'), adminUpdate)
router.delete("/admin/delete/:id", upload.none(), adminDelete)
