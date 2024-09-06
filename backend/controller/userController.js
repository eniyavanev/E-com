import asyncHandler from "express-async-handler";
import User from "../Models/userModel.js";

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    _id: user._id;
    name: user.name;
    email: user.email;
    isAdmin: user.isAdmin;
  } else {
    res.status(401);
    // throw new Error("Invalid email or password");
  }
});

export { authUser };
