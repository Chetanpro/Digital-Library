import express from "express";
import {authRegister, authorLogin, userLogin, userRegister} from "../controllers/auth.js";

const router = express.Router();

router.post("/author/register",authRegister);
router.post("/user/register",userRegister);
router.post("/author/login",authorLogin);
router.post("/user/login",userLogin);

export default router;