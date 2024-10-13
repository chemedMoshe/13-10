import { Request,Response } from "express";
import authService from "../service/authService";


export const login =(req: Request, res: Response) => {
    try{
const token = authService.login(req.body)

res.cookie("token", token)
res.status(200).json({ token });
}

catch(err){
    res.status(400).json({ err: true, message: err });
}};




