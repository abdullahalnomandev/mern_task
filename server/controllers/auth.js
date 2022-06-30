import bcrypt from "bcryptjs";
import Jwt from "jsonwebtoken";
import User from "../models/users.js";
import { createError } from "../utils/error.js";
const register = async (req, res, next) => {
  const salt = bcrypt.genSaltSync(10);
  const has = bcrypt.hashSync(req.body.password, salt);
  try {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: has
    });

    await newUser.save();
    res.status(201).send("User created Successfully.");
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return next(createError(404, "User not found!"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)   return next(createError(400, "Wrong password or username!"));

    const token = Jwt.sign( { id: user._id, email: user.email },  process.env.JWT_SECRET_KEY);
    const { password, ...otherDetails } = user._doc;
    res .cookie("access_token", token, { httpOnly: true  }).status(200).send({ ...otherDetails });
  } catch (error) {
    next(error);
  }
};

export { register, login };
