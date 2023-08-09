import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import authRoutes from "./routes/auth.js";
import authorRoutes from "./routes/author.js";
import userRoutes from "./routes/user.js";
import { getBooks } from "./controllers/book.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

/*Routes*/
app.get("/",getBooks);
app.use("/auth",authRoutes);
app.use("/author",authorRoutes);
app.use("/user",userRoutes);

const PORT = process.env.PORT;

mongoose.connect(process.env.URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server listening on PORT ${PORT}`);
    })
})
.catch((error)=>{
    console.log(`${error} Did not Connect`);
})

