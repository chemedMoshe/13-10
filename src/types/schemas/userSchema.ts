import mongoose from "mongoose";

export interface IUser extends mongoose.Document{
    name: string;
    email: string;
    password: string;
    className: string;
    isTeacher: boolean;
    scores?:Array<{testName:string,date:Date,score:number}>;

}
const userSchema = new mongoose.Schema<IUser>({
    name: {
        type: String,
        required: [true,"Name is required"]
    },
    email: {
        type: String,
        required: [true,"Email is required"],
        unique: true,
    },
    password: {
        type: String,
        required: [true,"Password is required"],
    },
    className: {
        type: String,ref:"Class",
        required: [true,"Class is required"],
    },
    isTeacher: {
        type: Boolean,
        default: false
    },
    scores: [{
        testName: String,
        date: Date,
        score: Number}],
    
});

export default mongoose.model("user", userSchema);