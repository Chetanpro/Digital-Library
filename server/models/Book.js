import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            min:2,
            max:100,
        },
        authorId:{
            type:String,
            required:true,
        },
        description:{
            type:String,
        },
        cost:{
            type:String,
        },
        ebookLink:{
            type:String,
        },
        imagePath:{
            type:String,
        },
    }
);

const Book = mongoose.model("Book",bookSchema);

export default Book;