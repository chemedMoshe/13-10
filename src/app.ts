import express from "express";
import dotenv from "dotenv";
import teacherRouter from "./routers/teacherRoutes";
import { errorHandler } from "./middleware/errorHandler";
import authRouter from "./routers/authRouter";
const cookieParser = require("cookie-parser");
import  connectDB from "./config/db";
import { studentRouter } from "./routers/studentRouter";
const { specs, swaggerUi } = require("../src/config/swagger");

dotenv.config();
const PORT = process.env.PORT|| 3000;


const app = express();
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

// Middleware
app.use(express.json());
connectDB();
app.use(cookieParser());
// Routes
app.use("/api/teacher", teacherRouter);
app.use('/api/login', authRouter)
app.use('/api/student', studentRouter);

// Error handling middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
