import { Router } from "express";
import { createStudent } from "../controllers/studentcontroller";

export const studentRouter: Router = Router();

studentRouter.post("/register",createStudent)