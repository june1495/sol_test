import { User } from "./model.js";
import bcrypt from "bcrypt";

export const signIn = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "User and password are required" });
    }
    const existingUser = await User.findOne({
      where: {
        username,
      },
    });
    if (!existingUser) {
      return res.status(404).json({ message: "Invalid user or password" });
    }
    const isPasswordValid = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid user or password" });
    }
    res.status(200).json({ fullName: existingUser.fullname });
  } catch (error) {
    next({ message: error.message, statusCode: 500 });
  }
};
