import Book from "../models/Book.js";

export const postBook = async (req,res)=>{
    try{
        const {authorId} = req.params;
        const {
            title,
            description,
            cost,
            ebookLink,
            imagePath,
        }=req.body;
        const newBook = new Book({
            title,
            authorId:authorId,
            description,
            cost,
            ebookLink,
            imagePath,
        });
        const savedBook = await newBook.save();
        res.status(200).json(savedBook);
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
}

export const getAuhtorBooks = async (req,res)=>{
    try{
        const {authorId} = req.params;
        const books = await Book.find({authorId});
        res.status(200).json(books);
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
}