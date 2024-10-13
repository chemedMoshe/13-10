import { Request, Response } from "express";
import authService from "../service/authService";

export const login = async (req: Request, res: Response) => {
  try {
    const token = await authService.login(req.body);
    res.cookie("token", token);
    
    res.status(200)
      .json({ message: "The connection was successful", token: `${token}` });
  } catch (err) {
   
    res.status(400).json({ err: true, message: `${err}`});
  }
};
