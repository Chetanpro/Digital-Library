import Book from "../models/Book.js";
import User from "../models/User.js";

export const addRemoveUserBook = async (req,res)=>{
    try{
        const {userId,bookId} = req.params;
        const user = await User.findById(userId);
        if(user.books.includes(bookId)){
            user.books = user.books.filter((id)=> id!==bookId);
        }
        else{
            user.books.push(bookId);
        }
        await user.save();

        const books = await Promise.all(
            user.books.map((id) => Book.findById(id))
          );
          const formattedBooks = books.map(
            ({ _id, title,authorId,description,cost,ebookLink,imagePath}) => {
              return { _id, title,authorId,description,cost,ebookLink,imagePath};
            }
          );
      
          res.status(200).json(formattedBooks);
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
}

export const getUserBooks = async (req,res)=>{
    try{
        const { id } = req.params;
        const user = await User.findById(id);
    
        const books = await Promise.all(
          user.books.map((id) => Book.findById(id))
        );
        const formattedBooks = books.map(
            ({ _id, title,authorId,description,cost,ebookLink,imagePath}) => {
              return { _id, title,authorId,description,cost,ebookLink,imagePath};
            }
          );
        res.status(200).json(formattedBooks);
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
}