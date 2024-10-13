import jwt from "jsonwebtoken";
import userDTO from "../types/modelDTO/userDTO";
import userSchema, { IUser } from "../types/schemas/userSchema";
import mongoose from "mongoose";
import { findTeacher } from "./techarService";
import TokenPayloadDTO from "../types/modelDTO/tokenPayloadDTO";
export default class AuthService {
  public static async login(
    userFromReq: userDTO
  ): Promise<{ err: boolean; status: number; data: { token: string } }> {
   
    const { name, password } = userFromReq;
    if (!name || !password)
      throw "must be userName and password into new user";
    
    const teacherObj:IUser = await findTeacher({ name, password });
  
    const payload: TokenPayloadDTO = {
      name: teacherObj.name,
      password: teacherObj.password,
      isTeacher: teacherObj.isTeacher,
    };

    const token = jwt.sign(payload, process.env.SECRET! as string, {
      expiresIn: "1h",
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

