import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

import postRoute from "./routes/posts.js";

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}))
app.use(cors());

// ROUTING 
app.use('/posts', postRoute);

// CONNECTING TO SERVER TO MONGODB
const CONNECTION_URL = 'mongodb+srv://harshitanegi:harshitanegi2003@cluster0.uwxvdyf.mongodb.net/test';
const PORT = 5000 || process.env.PORT;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }) 
  .then(()=> app.listen(PORT, ()=> console.log(`Server running on port: ${PORT}`)))
  .catch((e)=> console.log(e.message));





