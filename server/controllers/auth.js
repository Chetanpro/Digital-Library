import Author from "../models/Author.js";
import bcrypt from "bcrypt";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

export const authRegister = async (req,res)=>{
    try{
        const {
            firstName,
            lastName,
            email,
            password,
            books,
        }=req.body;
        
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password,salt);

        const newAuthor = new Author({
            firstName,
            lastName,
            email,
            password:passwordHash,
            books,
        });
        
        const savedAuthor = await newAuthor.save();
        res.status(200).json(savedAuthor);

    }
    catch(err){
        res.status(500).json({error:err.message});
    }
}

export const userRegister = async (req,res)=>{
    try{
        const {
            firstName,
            lastName,
            email,
            password,
            books,
        } = req.body;

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password,salt);

        const newUser = new User({
            firstName,
            lastName,
            email,
            password:passwordHash,
            books,
        });

        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
};

export const userLogin = async (req,res)=>{
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email:email});
        if(!user){
            res.status(400).json({message:'User does not exist...'});
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            res.status(400).json({message:'Invalid Credentials'});
        }
        const token = jwt.sign({id:user._id},process.env.JWT_KEY);
        delete user.password;
        res.status(200).json({token, user});

    }
    catch(err){
        res.status(500).json({error:err.message});
    }
};

export const authorLogin = async (req,res)=>{
    try{
        const {email,password}=req.body;
        const author = await Author.findOne({email:email});
        if(!author){
            res.status(400).json({message:'Auhthor does not exist'});
        }
        const isMatch = await bcrypt.compare(password,author.password);
        if(!isMatch){
            res.status(400).json({message:'Invalid Credentials'});
        }

        const token = jwt.sign({id:author._id},process.env.JWT_KEY);
        delete author.password;
        res.status(200).json({token,author});
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
}