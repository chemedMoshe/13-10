import {NextFunction, Request, Response} from "express"
import jwt from "jsonwebtoken"
import 'dotenv/config'
import TokenPayloadDTO from "../types/modelDTO/tokenPayloadDTO"

export const verifyifTeacher = async (req:Request, res:Response, next:NextFunction):Promise<void> => {
    try{
    const token:string = req.cookies.token
    const decoded = jwt.verify(token, process.env.SECRET!) as TokenPayloadDTO
   
   decoded.isTeacher ? next():res.status(401).json({err:true,message:`you are not a teacher`})
   
    }catch(err){
        res.status(401).json({err:true,message:`${err}`})
    }
}

export const verifyifStudent = async (req:Request, res:Response, next:NextFunction):Promise<void> => {
    try{
    const token:string = req.cookies.token
    const decoded = jwt.verify(token, process.env.SECRET!) as TokenPayloadDTO
    //@ts-ignore
    req.user = decoded
    next()
    }catch(err){
        res.status(401).json({err:true,message:`${err}`})
    }
}