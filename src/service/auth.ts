import jwt from "jsonwebtoken";
import userDTO from "../types/modelDTO/userDTO";
import { getAllTeachers } from "./techarService";
import mongoose from "mongoose";
export default class AuthService {
  public static async login(
    userFromReq: userDTO
  ): Promise<{ err: boolean; status: number; data: { token: string } }> {
   
    const { name, password } = userFromReq;
    if (!name || !password)
      throw "must be userName and password into new user";
    
    const teacherObj:mongoose.Document= await getAllTeachers()
  
  

    const payload: TokenPayloadDTO = {
      name: teacherObj.name,
      username: userObjExsist.userName,
    };
    const token = jwt.sign(payload, process.env.SECRET! as string, {
      expiresIn: "1m",
    });
    return {
      err: false,
      status: 200,
      data: {
        token,
      },
    };
  }
  
  }

