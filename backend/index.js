import express from "express";
import dotenv from "dotenv";
import { connectToDB } from "./utils/connectToDB.js";
import participantRouter from "./routes/participant.route.js";
import cors from "cors";
import adminRouter from "./routes/admin.route.js";

dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: ["https://www.techazura.online","https://techazura-admin.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE","OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.options("*", cors());
app.use(async (req, res, next) => {
  await connectToDB();
  next();
});

app.use("/api", participantRouter);
app.use("/api/admin", adminRouter);

app.get("/", (req, res) => {
  res.json({ message: "Backend is working!" });
});

app.listen(3000,()=>{
  console.log("connected");
})

export default app; 
