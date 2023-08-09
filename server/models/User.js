import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema(
    {
        firstName:{
            type:String,
            required:true,
            min:2,
            max:30,
        },
        lastName:{
            type:String,
            required:true,
            min:2,
            max:30,
        },
        email:{
            type:String,
            required:true,
            unique:true,
            validate:[validator.isEmail,'invalid email'],
        },
        password:{
            type:String,
            required:true,
            min:8,
        },
        books:{
            type:Array,
            default:[],
        },
    }
);

const User = mongoose.model("User",userSchema);

export default User;