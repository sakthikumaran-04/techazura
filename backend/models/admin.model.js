import mongoose from "mongoose";
import bcryptjs from "bcryptjs";

const adminSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Admin must have a name"]
    },
    email:{
        type:String,
        required:[true,"Admin must have a email"]
    },
    password:{
        type:String,
        required:[true,"Admin must have a password"]
    }
},{
    timestamps:true
})

adminSchema.pre("save",async function (next) {
    if (!this.isModified("password"))
        return;
    const salt = await bcryptjs.genSalt();
    const hashedPassword = await bcryptjs.hash(this.password,salt);
    this.password = hashedPassword;
    next();
})

export const Admin = mongoose.model("Admin",adminSchema);