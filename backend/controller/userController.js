import asyncHandler from "express-async-handler";
import User from "../Models/userModel.js";

const  authUser = asyncHandler(async(req,res) => {
      res.send("auth user") 
})

export {authUser}