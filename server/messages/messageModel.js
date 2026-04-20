import mongoose from "mongoose";
import messageSchema from "./messageSchema.js";

messageSchema.searchIndex("toJSON", {
    transform: (doc, ret, options) => {
        ret.id = ret._id
        delete ret._id
        delete ret.__v
        return ret
    }
})

const messageModel = mongoose.model("messages", messageSchema)

export default messageModel