import { Router } from "express";
import { deleteUser, updatedUser, userLogin, userRegister } from "../Controllers/authController/userAuthController.js";
import { upload } from "../middlewares/upload.js";
import { deleteTheater, theaterLogin, theaterRegister, theaterUpdate } from "../Controllers/authController/theaterAuthController.js";
import { adminLogin } from "../Controllers/authController/adminAuthController.js";
import { updateUserStatus } from "../Controllers/authController/userAuthController.js";
export const router = Router()
import { theaterRegisterValidation } from "../validators/theaterValidation.js";
import { validateRequest } from "../middlewares/validateRequest.js";
import { userRegistrationValidation } from "../validators/userValidation.js";
import { userLoginValidation } from "../validators/userValidation.js";


//user
router.post("/user/register", upload.single('profilePic'),validateRequest(userRegistrationValidation), userRegister)
router.post("/user/login",upload.none(),validateRequest(userLoginValidation), userLogin)
router.put("/user/update/:id",upload.single('profilePic'),updatedUser)
router.delete("/user/delete/:id",deleteUser)
router.patch('/user/status/:id',updateUserStatus)


//theater
router.post("/theater/register", upload.single('image'), validateRequest(theaterRegisterValidation),theaterRegister)
router.post("/theater/login", upload.none(), theaterLogin)
router.put("/theater/update/:id",upload.single('image'),theaterUpdate)
router.delete("/theater/delete/:id",upload.none(),deleteTheater)


//admin
router.post("/admin/login", upload.none(), adminLogin)

