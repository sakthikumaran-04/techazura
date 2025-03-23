import { Admin } from "../models/admin.model.js";
import jwt from "jsonwebtoken";

export async function checkIsAdmin(req, res, next) {
    try {
        const authHeader = req.headers.authorization;
        if (authHeader=="Bearer null" || !authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ success: false, message: "Unauthorized - No token provided" });
        }

        const token = authHeader.split(" ")[1];
        const decodedToken = jwt.verify(token,process.env.SECRET);  
        const admin = await Admin.findById(decodedToken.adminId);
        if (!admin) {
            return res.status(400).json({ success: false, message: "Invalid credentials" });
        }

        req.isAdminAuthenticated = true;
        req.admin = admin; 
        next();
    } catch (error) {
        console.error(`Error in admin authentication: ${error}`);
        return res.status(500).json({ success: false, message: error.message });
    }
}
