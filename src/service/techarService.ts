import teacherDTO from "../types/modelDTO/userDTO";
import userschema from "../types/schemas/userSchema";
import classSchema from "../types/schemas/classSchema";
import loginDTO from "../types/modelDTO/loginDTO";
import mongoose from "mongoose";
export const createNewTecher = async (userFromReq: teacherDTO) => {
  const { name, email, password, className } = userFromReq;
  if (!name || !email || !password || !className) {
    throw "must be name,mail,password,className into new theacher";
  }
  const classExist = await classSchema.findOne({ name: className });
  if (classExist)
    throw `class ${className} is exist AND new teacher must a new classrom`;
  const newUser = new userschema({
    name,
    email,
    password,
    className,
  });
  await newUser.save();
  return newUser;
};

export const findTeacher = async (teacher:loginDTO):Promise<mongoose.Document> => {
  const thisteacher = await userschema.findOne({name:teacher.username,password:teacher.password});
  if(!thisteacher) throw `userName ${teacher.username} is not Exist`;
  return thisteacher as mongoose.Document;
};
