import bcrypt from "bcrypt";
import teacherDTO from "../types/modelDTO/userDTO";
import userschema, { IUser } from "../types/schemas/userSchema";
import classSchema from "../types/schemas/classSchema";
import loginDTO from "../types/modelDTO/loginDTO";
import mongoose from "mongoose";

export const createNewClassrom = async (
  name: string,
  idteacher: mongoose.Types.ObjectId | unknown
) => {
  const newClass = new classSchema({
    name,
    teacher: idteacher,
  });
  await newClass.save();
};



export const createNewTecher = async (
  userFromReq: teacherDTO
): Promise<IUser> => {
  const { name, email, password, className } = userFromReq;
  if (!name || !email || !password || !className) {
    throw "must be name,mail,password,className into new theacher";
  }
  
  const classExist = await classSchema.findOne({ name: className });
  
  if (classExist){
    throw `class ${className} is exist AND new teacher must a new classrom`;
  }
 
  const hashedPassword = await bcrypt.hash(password, 10);
  const newTeacher = new userschema({
    name,
    email,
    password: hashedPassword,
    className,
    isTeacher: true,
  });
  await newTeacher.save();
  await createNewClassrom(newTeacher.className, newTeacher._id);
  return newTeacher;
};

export const findTeacher = async (teacher: loginDTO): Promise<IUser> => {
  try {
    const user = await userschema.findOne({name: teacher.name});
    if(!user) throw new Error(`invalid user name or password`)
    const result =  await bcrypt.compare(teacher.password, user.password)

    return user;
  } catch (error) {
   
    throw error
  }

};
