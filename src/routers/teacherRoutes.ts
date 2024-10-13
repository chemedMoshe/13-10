import { Router } from "express";
import { createTeacher, updateScore } from "../controllers/techarController";

const teacherRouter: Router = Router();

teacherRouter.post("/register", createTeacher);
teacherRouter.put('/score',updateScore)

export default teacherRouter;
