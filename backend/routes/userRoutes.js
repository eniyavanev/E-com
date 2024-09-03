import { authUser } from "../controller/userController.js";
import express from "express";

const router = express.Router();

router.post("/login", authUser);

export default router;
