import express from "express";
import dotenv from "dotenv";
import postRouter from "./routers/postRoutes";
import userRouter from "./routers/userRoutes";
import { errorHandler } from "./middleware/errorHandler";
import connectDB from "./config/db";
const cookieParser = require("cookie-parser");
const { specs, swaggerUi } = require('./config/swaggerConfig');

dotenv.config();
const app = express();
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
connectDB();

// Routes
app.use("/api/posts", postRouter);
app.use("/api/users", userRouter);


// Error handling middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
