import  teacherDTO  from "../types/modelDTO/teacherDTO";
import userschema from "../types/schemas/studentSchema";
import classSchema from "../types/schemas/classSchema";
const createNewTecher = async (userFromReq: teacherDTO) => {
    const { name, mail, password, className } = userFromReq;
    if (!name || !mail || !password || !className){
        throw "must be name,mail,password,className into new theacher";
    }
    const classExist = await classSchema.findOne({name:className});
    if(classExist) throw `class ${className} is exist AND new teacher must a new classrom`;
    const newUser = new userschema({
        name,
        mail,
        password,
        className
    })
    await newUser.save();
    return newUser;
    
}