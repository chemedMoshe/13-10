import mongoose from "mongoose";

export default interface IUpdateScore {
    idStudent: mongoose.Types.ObjectId | unknown;
    testName: string;
    score: number;
}