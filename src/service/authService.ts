import jwt from "jsonwebtoken";
import userDTO from "../types/modelDTO/userDTO";
import userSchema, { IUser } from "../types/schemas/userSchema";
import { findTeacher } from "./techarService";
import TokenPayloadDTO from "../types/modelDTO/tokenPayloadDTO";

export default class AuthService {
  public static async login(userFromReq: userDTO): Promise<string> {
    const { name, password } = userFromReq;
    if (!name || !password) throw "must be userName and password into new user";

    const teacherDB: IUser = await findTeacher({ name, password });

    const payload: TokenPayloadDTO = {
      name: teacherDB.name,
      password: teacherDB.password,
      isTeacher: teacherDB.isTeacher,
    };

    const token: string = jwt.sign(payload, process.env.SECRET! as string, {
      expiresIn: "1h",
    });

    return token;
  }
}
