import mongoose from "mongoose";

const participantSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true,"participant must have a name"]
    },
    email:{
        type: String,
        required: [true,"participant must have a email address"]
    },
    phone:{
        type: Number,
        required: [true,"participant must have a phone number"]
    },
    college:{
        type: String,
        required: [true,"participant must have a college name"]
    },
    transactionId:{
        type: String,
        required: [true,"participant must have a transaction id"]
    },
    technicalEvent:{
        type:String,
        required: [true,"participant must have a technical event"]
    },
    nonTechnicalEvent:{
        type:String,
        required:[true,"participant must have a non technical event"]
    },
    screenshot:{
        type: String,
        required: [true,"participant must have a payment screenshot"]
    },
    accepted:{
        type: Boolean,
        default:false
    }
})

export const Participant = new mongoose.model("Participant",participantSchema);

