import { Request, Response, NextFunction } from "express";
import userDTO from "../types/modelDTO/userDTO";
import { createNewTecher } from "../service/techarService";
import IUser from "../types/modelDTO/userDTO";


// Create a new teacher

export const createTeacher = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const newUser: IUser = await createNewTecher(req.body);
    res.status(201).json({ message: "Teacher created successfully", data: newUser });
  } catch (err) {
    res.status(400).json({ err: true, message: `${err}` });
  }
};



