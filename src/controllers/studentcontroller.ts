import { Request, Response, NextFunction } from "express";
import studentDTO from "../types/modelDTO/userDTO";
import IUser from "../types/modelDTO/userDTO";
import { createNewStudent } from "../service/studentService";

export const createStudent = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const newUser: IUser = await createNewStudent(req.body);
        res.status(201).json({ message: "Student created successfully", data: newUser });
    } catch (err) {
        res.status(400).json({ err: true, message: `${err}` });
    }
};