import mongoose, { Schema } from "mongoose"

const messageSchema = new Schema({
    fullName: String,
    email: String,
    phone: String,
    message: String
})

export default messageSchema