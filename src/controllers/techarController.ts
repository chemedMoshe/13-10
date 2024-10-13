import { Request, Response } from "express";
import { createNewTecher, insertNewScore } from "../service/techarService";
import IUser from "../types/modelDTO/userDTO";

// Create a new teacher
export const createTeacher = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const newUser: IUser = await createNewTecher(req.body);
    
    res.status(201)
      .json({ message: "Teacher created successfully", data: newUser });
  } catch (err) {
    res.status(400).json({ err: true, message: `${err}` });
  }
};

//apdate score per student
export const addNewScore = async (req: Request, res: Response) => {
  try {
   
    await insertNewScore(req.body);
    res.status(200).json({ message: "score updated successfully" });
  } catch (err) {
    res.status(400).json({ err: true, message: `${err}` });
  }
};
