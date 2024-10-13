import mongoose from "mongoose";

export default interface IScore {
  idStudent: mongoose.Types.ObjectId | unknown;
  testName: string;
  score: number;
}
