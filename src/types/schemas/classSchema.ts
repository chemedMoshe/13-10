import mongoose, { Schema } from "mongoose";


export interface IClass {
    name:string;
    teacher:mongoose.Types.ObjectId;
    students:[mongoose.Types.ObjectId];
}
export const classSchema = new mongoose.Schema<IClass>(({
    name: {
        type: String,
        required: [true,"Name is required"]
    },
    teacher: {
        type: Schema.Types.ObjectId, ref:"User",
        required: [true,"Teacher is required"],
    },
    students: [{
        type: Schema.Types.ObjectId, ref:"User",
        default: []
    }],
}));


export default mongoose.model("classroom", classSchema)