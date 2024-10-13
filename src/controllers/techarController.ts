import { Request, Response, NextFunction } from "express";
import { IUser } from "../types/schemas/studentSchema";

// Create a new teacher
export const createTeacher = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try{
  const newUser: IUser = req.body;
  res.status(201).json({ message: "Teacher created successfully" });
  }
  catch(err){
res.status(400).json({err:true,message:err})
  }

};

// Delete a post
export const deletePost = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {};

// Get all posts
export const getPosts = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {};

// Get a single post by ID
export const getPost = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {};

// Update a post
export const updatePost = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {};

// Add a comment to a post
export const addComment = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {};
