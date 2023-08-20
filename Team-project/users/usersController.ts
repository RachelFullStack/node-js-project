import { StringExpressionOperator } from "mongoose";
import User from "./usersModel";
import jwt from "jwt-simple";
const secret: string = process.env.JWT_SECRET as string;
// ----------------------------------------------------------------------
export const userRegistration = async (req: any, res: any) => {
  try {
    const { userName, userPassword } = req.body;
    console.log(`userName: ${userName}, userPassword: ${userPassword}`);
    const databaseUser = await User.create({
      userName,
      userPassword,
    });
    console.log(`databaseUser: ${databaseUser}`);

    res.status(200).send({ ok: true });
  } catch (error) {
    console.log(error);
    res.status(500).send("error in register");
  }
};

// ----------------------------------------------------------------------
export const userLogin = async (req: any, res: any) => {
  try {
    const { userName, userPassword } = req.body;
    console.log(userName, userPassword);
    const databaseUser = await User.findOne({ userName, userPassword });
    if (!databaseUser) throw new Error("the date didn't arrive");
    console.log(databaseUser);

    const token = jwt.encode({ userId: databaseUser._id }, secret);

    res.cookie("user", token, {
      maxAge: 50000000,
      httpOnly: true,
    });
    res.status(200).send({ ok: true });
  } catch (error: any) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

// ----------------------------------------------------------------------
export const getDatabaseUser = async (req: any, res: any) => {
  try {
    const { user } = req.cookies;
    console.log(user);
    const decoded = jwt.decode(user, secret);
    const { userId } = decoded;
    const databaseUser: any = await User.findById(userId);
    if (!databaseUser) throw new Error("problem with function getDatabaseUser");
    console.log(databaseUser);
    res.send({ databaseUser });
  } catch (error: any) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};
