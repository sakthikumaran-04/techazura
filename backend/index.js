import express from "express";
import dotenv from "dotenv";
import { connectToDB } from "./utils/connectToDB.js";
import participantRouter from "./routes/participant.route.js";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(async (req, res, next) => {
  await connectToDB();
  next();
});

app.use("/api", participantRouter);

app.get("/", (req, res) => {
  res.json({ message: "Backend is working!" });
});

app.listen(3000,()=>{
  console.log("connected");
})

export default app; 
