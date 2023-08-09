import express from "express";
import {verifyToken} from "../middleware/auth.js";
import { postBook, getAuhtorBooks } from "../controllers/author.js";

const router = express.Router();

router.get("/:authorId/books",verifyToken,getAuhtorBooks);
router.post("/:authorId/books/post",verifyToken,postBook);

export default router;