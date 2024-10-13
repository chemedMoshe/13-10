import { Router } from "express";
import { createTeacher } from "../controllers/techarController";

const teacherRouter: Router = Router();

teacherRouter.post("/register", createTeacher);


export default teacherRouter;
