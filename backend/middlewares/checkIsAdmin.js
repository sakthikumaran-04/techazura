import { Admin } from "../models/admin.model.js";

export async function checkIsAdmin(req, res, next) {
    try {
        const authHeader = req.headers.authorization;
        console.log(authHeader);
        if (authHeader=="Bearer null" || !authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ success: false, message: "Unauthorized - No token provided" });
        }

        const token = authHeader.split(" ")[1]; 
        const admin = await Admin.findById(token);
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
