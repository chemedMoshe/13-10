import { Router } from "express";
import { createTeacher, addNewScore } from "../controllers/techarController";

const teacherRouter: Router = Router();

teacherRouter.post("/register", createTeacher);
teacherRouter.put("/score", addNewScore);

export default teacherRouter;
