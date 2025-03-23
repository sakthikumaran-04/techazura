import { sendTicketEmail } from "../mailtrap/email.js";
import { Admin } from "../models/admin.model.js";
import { Participant } from "../models/participant.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export async function approveTicket(req, res) {
    try {
        if(!req.isAdminAuthenticated){
            return res.status(400).json({ success: false, message: 'No Token Provided' });
        }
        const { id } = req.params; 
        if(!id){
            return res.status(400).json({ success: false, message: 'Id is required' });
        }
        const updatedParticipant = await Participant.findByIdAndUpdate(
            id,
            { accepted: true },
            { new: true } 
        );

        if (!updatedParticipant) {
            return res.status(404).json({ message: "Participant not found" });
        }
        await sendTicketEmail(updatedParticipant.name,updatedParticipant.email,updatedParticipant._id);
        return res.status(200).json({ message: "Ticket approved successfully", participant: updatedParticipant });
    } catch (error) {
        res.status(500).json({ message: "Error approving ticket", error: error.message });
    }
}

export async function fetchSingleParticipant(req,res){
    try {
        if(!req.isAdminAuthenticated){
            return res.status(400).json({ success: false, message: 'No Token Provided' });
        }
        const id = req.params.id;
        if(!id){
            return res.status(400).json({ success: false, message: 'Id is required' });
        }
        const participant = await Participant.findById(id);
        if (!participant) {
            return res.status(404).json({ message: "Participant not found" });
        }
        res.json(participant);
    } catch (error) {
        console.log(`Error while fetching participant: ${error}`);
        return res.status(500).json({success:false,message:error.message});
    }
}

export async function fetchAllUnVerifiedUsers(req,res) {
    try {
        if(!req.isAdminAuthenticated){
            return res.status(400).json({ success: false, message: 'No Token Provided' });
        }
        const participants = await Participant.find({accepted:false});
        return res.status(200).json({success:true,message:"participants fetched successfully",participants});
    } catch (error) {
        console.log(`Error while fetching participants: ${error}`);
        return res.status(500).json({success:false,message:error.message});
    }
}

export async function fetchAllVerifiedUsers(req,res) {
    try {
        if(!req.isAdminAuthenticated){
            return res.status(400).json({ success: false, message: 'No Token Provided' });
        }
        const participants = await Participant.find({accepted:true});
        return res.status(200).json({success:true,message:"participants fetched successfully",participants});
    } catch (error) {
        console.log(`Error while fetching participants: ${error}`);
        return res.status(500).json({success:false,message:error.message});
    }
}

export async function createAdmin(req,res){
    try {
            const createAdminKey = req.header('x-api-key');
            if(!createAdminKey || createAdminKey!=process.env.CREATE_ADMIN_SECRET){
                return res.status(400).json({ success: false, message: 'Unauthorized Access' });
            }
            const {name,email,password} = req.body;
            if (!name || !email || !password) {
                return res.status(400).json({ success: false, message: 'All fields are required' });
            }
            const existingAdmin = await Admin.find({email});
            if(existingAdmin.length!=0){
                return res.status(400).json({ success: false, message: 'Admin with this email Id already exist!' });
            }          
            const newAdmin = new Admin({name,email,password});
            await newAdmin.save();
            return res.status(201).json({
                success: true,
                message: 'Admin created successfully'
            });
        } catch (error) {
            console.error(`Error while creating Admin : ${error.message}`);
            return res.status(500).json({
                success: false,
                message: 'Internal server error',
                error: error.message,
            });
        }
}

export async function loginAdmin(req,res){
    try {
        const {email,password} = req.body;
        if (!email || !password) {
            return res.status(400).json({ success: false, message: 'All fields are required' });
        }
        const admin = await Admin.find({email});
        if(admin.length==0){
            return res.status(400).json({success:false,message:"Invalid credentials"});
        }
        const isPasswordCorrect = await bcryptjs.compare(password,admin[0].password);
        if(!isPasswordCorrect){
            return res.status(400).json({success:false,message:"Invalid credentials"});
        }
        const token = jwt.sign({adminId:admin[0]._id},process.env.SECRET,{expiresIn:'1d'});
        return res.status(200).json({success:true,message:"admin login success",adminId:token});
    } catch (error) {
        console.error(`Error while login Admin : ${error.message}`);
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message,
        });
    }
}