import express from "express";
import dotenv from "dotenv";
import teacherRouter from "./routers/teacherRoutes";
import { errorHandler } from "./middleware/errorHandler";
import connectDB from "./config/db";
const cookieParser = require("cookie-parser");
const { specs, swaggerUi } = require("../src/config/swagger");

const PORT = process.env.PORT || 3000;

dotenv.config();

const app = express();
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

// Middleware
app.use(express.json());
connectDB();

// Routes
app.use("/api/teacher", teacherRouter);


// Error handling middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
