import dotenv from "dotenv";
import Nodemailer from "nodemailer";
import { MailtrapTransport } from "mailtrap";

dotenv.config(); // Load environment variables

const transport = Nodemailer.createTransport(
  MailtrapTransport({
    token: process.env.MAILTRAP_PASS, // Securely store token in .env
  })
);

export const sender = {
  address: "hello@techazura.online",
  name: "TechAzura Symposium",
};

export { transport };
