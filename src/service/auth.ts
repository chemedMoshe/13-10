import jwt from "jsonwebtoken";
export default class AuthService {
  public static async login(
    userFromReq: signUpDTO
  ): Promise<{ err: boolean; status: number; data: { token: string } }> {
   
    const { username, password, mail } = userFromReq;
    if (!username || !password)
      throw "must be userName and password into new user";

    const usersObj: UserModel[] = await getAllitemsintoFille<UserModel>("Users");
   
    const userObjExsist: UserModel | undefined = usersObj.find(
      (x) => x.mail === mail
    );
  //console.log(userExsist instanceof UserModel);
  
  if (!userObjExsist) throw `userName ${userFromReq.username} is not Exist`;
  const userUserModel:UserModel = new UserModel(userObjExsist.userName, userObjExsist.mail);
  userUserModel.id = userObjExsist.id;
  userUserModel.password = userObjExsist.password;
    if (!await userUserModel.comparePassword(password))
      throw `password is wrong`;

    const payload: TokenPayloadDTO = {
      id: userObjExsist.id,
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

