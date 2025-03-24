import { Router } from "express";
import { checkIsAdmin } from "../middlewares/checkIsAdmin.js";
import { approveTicket, createAdmin, deleteParticipant, fetchAllUnVerifiedUsers, fetchAllVerifiedUsers, fetchSingleParticipant, loginAdmin } from "../controllers/admin.controller.js";

const adminRouter = Router();
adminRouter.post("/create-admin",createAdmin);
adminRouter.post("/login-admin",loginAdmin);
adminRouter.put("/approve-ticket/:id",checkIsAdmin,approveTicket)
adminRouter.delete("/reject-ticket/:id",checkIsAdmin,deleteParticipant);
adminRouter.get("/participant/:id",checkIsAdmin,fetchSingleParticipant);
adminRouter.get("/unverified",checkIsAdmin,fetchAllUnVerifiedUsers);
adminRouter.get("/verified",checkIsAdmin,fetchAllVerifiedUsers);

export default adminRouter;