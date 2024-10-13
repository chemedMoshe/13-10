import exp, { Router,Request,Response } from "express";
import { login } from "../controllers/authController";
const router: Router = exp.Router();

router.post("/", login);




export default router