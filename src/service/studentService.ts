import bcrypt from "bcrypt";
import userSchema from "../types/schemas/userSchema";
import studentDTO from "../types/modelDTO/userDTO";
import IUser from "../types/modelDTO/userDTO";
import mongoose from "mongoose";
import classSchema from "../types/schemas/classSchema";

export const insertIntoClass = async (
  nameStudent: string,
  idstudent: mongoose.Types.ObjectId | unknown
) => {
  const classPerUserExist = await classSchema.findOne({
    name: nameStudent,
  });

  if (!classPerUserExist) throw new Error("class not found");
  await classSchema.findOneAndUpdate(
    { name: nameStudent },
    { $push: { students: idstudent } }
  );
};

export const createNewStudent = async (
  userFromReq: studentDTO
): Promise<IUser> => {
  const { name, email, password, className } = userFromReq;
  if (!name || !email || !password || !className) {
    throw "must be name,mail,password,className into new theacher";
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newStudent = new userSchema({
    name,
    email,
    password: hashedPassword,
    className,
  });

  await insertIntoClass(className, newStudent._id);
  await newStudent.save();
  return newStudent;
};
