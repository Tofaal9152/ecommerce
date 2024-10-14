import mongoose from "mongoose";

const userScema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        // required:true
        selet: false
    }
}, { timestamps: true });

export const User = mongoose.models.User || mongoose.model("User", userScema)
