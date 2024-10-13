import { Request, Response, NextFunction } from "express";
import { IUser } from "../types/schemas/studentSchema";

// Create a new theacher
export const createTeacher = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const newUser: IUser = req.body;
  res.status(201).json({ message: "Teacher created successfully" });

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
