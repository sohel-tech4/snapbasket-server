import express from "express";
import { StudentControllers } from "../student/student.controller";

const router = express.Router();

router.post("/create-student", StudentControllers);

export const UserRoutes = router;
