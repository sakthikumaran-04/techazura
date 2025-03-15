import { sendTicketEmail, sendWelcomeEmail } from "../mailtrap/email.js";
import { Participant } from "../models/participant.model.js";

export async function createParticipant(req,res){
    try {
        const {name,email,phone,college,transactionId,technicalEvent,nonTechnicalEvent} = req.body;
        if (!name || !email || !phone || !college || !transactionId) {
            return res.status(400).json({ success: false, message: 'All fields are required' });
        }
        let imageUrl = '';
        if (req.file) {
            imageUrl = req.file.path; 
        } else {
            return res.status(400).json({ success: false, message: 'Image is required' });
        }
        const existingParticipant = await Participant.find({transactionId});
        console.log(existingParticipant);
        if(existingParticipant.length!=0){
            return res.status(400).json({ success: false, message: 'User with this transaction Id already exist!' });
        }          
        const newParticipant = new Participant({name,email,phone,college,transactionId,screenshot:imageUrl,technicalEvent,nonTechnicalEvent});
        await newParticipant.save();
        await sendWelcomeEmail(email,name);
        return res.status(201).json({
            success: true,
            message: 'Ticket requested successfully',
            item: newParticipant,
        });
    } catch (error) {
        console.error(`Error while creating participant : ${error.message}`);
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message,
        });
    }
}

export async function fetchAllUnVerifiedUsers(req,res) {
    try {
        const participants = await Participant.find({accepted:false});
        return res.status(200).json({success:true,message:"participants fetched successfully",participants});
    } catch (error) {
        console.log(`Error while fetching participants: ${error}`);
        return res.status(500).json({success:false,message:error.message});
    }
}

export async function fetchAllVerifiedUsers(req,res) {
    try {
        const participants = await Participant.find({accepted:true});
        return res.status(200).json({success:true,message:"participants fetched successfully",participants});
    } catch (error) {
        console.log(`Error while fetching participants: ${error}`);
        return res.status(500).json({success:false,message:error.message});
    }
}

export async function fetchSingleParticipant(req,res){
    try {
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

export async function approveTicket(req, res) {
    try {
        const { id } = req.params; // Get participant ID from request params
        if(!id){
            return res.status(400).json({ success: false, message: 'Id is required' });
        }
        // Find and update participant
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