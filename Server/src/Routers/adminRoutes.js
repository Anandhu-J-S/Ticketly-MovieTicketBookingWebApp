import { Router } from "express";
import { banUser, unbanUser } from "../Controllers/adminControllers/banUsers.js";
import { banTheater, unbanTheater } from "../Controllers/adminControllers/banTheater.js";

export const adminRoutes = Router();


//not checked
adminRoutes.patch('/admin/userban/:userId',banUser)

adminRoutes.patch('/admin/userunban/:userId',unbanUser)

adminRoutes.patch('/admin/theaterban/:theaterId',banTheater)

adminRoutes.patch('/admin/theaterunban/:theaterId',unbanTheater)