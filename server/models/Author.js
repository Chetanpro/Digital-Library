import mongoose from "mongoose";
import validator from "validator";

const AuthorSchema = new mongoose.Schema(
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
            unique:true,
            required:true,
            max:50,
            validate:[validator.isEmail, 'invalid email'],

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

const Author = mongoose.model("Author",AuthorSchema);

export default Author;
