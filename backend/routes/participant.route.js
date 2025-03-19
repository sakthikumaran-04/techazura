import { Router } from "express";
import { upload } from "../utils/imageUpload.js";
import { createParticipant } from "../controllers/participant.controller.js";
const participantRouter = Router();
participantRouter.post("/createTicket",upload.single('screenshot'),createParticipant);

export default participantRouter;