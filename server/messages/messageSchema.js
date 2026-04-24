import mongoose, { Schema } from "mongoose"

const messageSchema = new Schema({
    fullName: String,
    email: String,
    phone: String,
    message: { type: String, unique: true }
})

export default messageSchema