import express from "express";
import { login, register } from "../services/auth";
import { loginValidator, signupValidator } from "../validator/authValidator";

const router = express.Router();

router.post("/register", signupValidator, register);
router.post("/login", loginValidator, login);

export default router;
