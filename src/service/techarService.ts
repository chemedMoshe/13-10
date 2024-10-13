import bcrypt from "bcrypt";
import teacherDTO from "../types/modelDTO/userDTO";
import userschema, { IUser } from "../types/schemas/userSchema";
import classSchema from "../types/schemas/classSchema";
import loginDTO from "../types/modelDTO/loginDTO";
export const createNewTecher = async (userFromReq: teacherDTO): Promise<IUser> => {
  const { name, email, password, className } = userFromReq;
  if (!name || !email || !password || !className) {
    throw "must be name,mail,password,className into new theacher";
  }
  const classExist = await classSchema.findOne({ name: className });
  if (classExist)
    throw `class ${className} is exist AND new teacher must a new classrom`;
  
  const hashedPassword = await bcrypt.hash(password, 10);
  const newteacher = new userschema({
    name,
    email,
    password: hashedPassword,
    className,
  });
  
  await newteacher.save();
  return newteacher;
};



export const findTeacher = async (teacher: loginDTO): Promise<IUser> => {
  const nameExist = await userschema.find({
    name: teacher.name,
  });
  if (!nameExist) throw `userName ${teacher.name} is not Exist`;
  const thisteacher = nameExist.find(async(x) => await bcrypt.compare(teacher.password, x.password));
  if(!thisteacher) throw `password or name is wrong`;
  return thisteacher;
};
