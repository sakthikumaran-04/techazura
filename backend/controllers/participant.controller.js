import { sendWelcomeEmail } from "../mailtrap/email.js";
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
