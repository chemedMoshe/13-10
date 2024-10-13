import mongoose from "mongoose";
export default interface IScore {
    testName: string
    date: string
    score: number
}
export const scoresSchema = new mongoose.Schema<IScore>({
    testName: String,
    date: String,
    score: Number})