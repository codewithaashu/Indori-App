import express from "express";
import loginUser from "../controller/loginUser.js";
import registerUser from "../controller/registerUser.js";
import completeProfile from "../controller/completeProfile.js";
const router =  express.Router();
router.route("/login").post(loginUser);
router.route("/register").post(registerUser);
router.route("/completeProfile").post(completeProfile);
export default router;