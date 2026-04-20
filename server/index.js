import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import messageRouter from "./messages/messageIndex";

const app = express();
app.use(express.json());
const port = process.env.PORT || 8877;
const cookieSecret = process.env.COOKIE_SECRET || "secreto"

const whitelist = process.env.WHITELISTED_DOMAINS
  ? process.env.WHITELISTED_DOMAINS.split(",")
  : [];

  //So frontend can connect to the backend
app.use(cookieParser(cookieSecret));
//Set Express CORS
const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};
app.use(cors(corsOptions));
app.disable("x-powered-by");

app.get("/", (req, res) => {
    res.send("Hello Morgans World!");
  });

  app.use("/messages", messageRouter)

  try {
    const mongoURI = process.env.MONGO_URI || "";
    await mongoose.connect(mongoURI);
    console.log(`My portfolio is connected @ ${mongoURI}`);
    app.listen(port, () => {
      console.log(`My Portfolio listening on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }