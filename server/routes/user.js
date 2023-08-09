import express from "express";
import { verifyToken } from "../middleware/auth.js";
import { addRemoveUserBook, getUserBooks } from "../controllers/user.js";

const router = express.Router();

router.post("/:userId/:bookId/addBook",verifyToken,addRemoveUserBook);
router.get("/:userId/getBooks",verifyToken,getUserBooks);

export default router;