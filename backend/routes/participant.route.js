import { Router } from "express";
import { upload } from "../utils/imageUpload.js";
import { approveTicket, createParticipant, fetchAllUnVerifiedUsers, fetchAllVerifiedUsers, fetchSingleParticipant } from "../controllers/participant.controller.js";
const participantRouter = Router();
participantRouter.post("/createTicket",upload.single('screenshot'),createParticipant);
participantRouter.get("/unverified",fetchAllUnVerifiedUsers);
participantRouter.get("/verified",fetchAllVerifiedUsers);
participantRouter.get("/participant/:id",fetchSingleParticipant);
participantRouter.put("/participant/:id",approveTicket);

export default participantRouter;