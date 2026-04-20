import express from "express"
import messageCreate from "./messageCreate.js"

const messageIndex = express.Router()

messageIndex.post("/", messageCreate)

export default messageIndex