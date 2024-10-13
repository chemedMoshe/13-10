import mongoose from "mongoose";
export default interface IScore {
    testName: string
    date: Date
    score: number
}
export const scoresSchema = new mongoose.Schema<IScore>({
    testName: String,
    date: Date,
    score: Number})