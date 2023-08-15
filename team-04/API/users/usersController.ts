import User from "./usersModel";

export const userRegistration = async (req: any, res: any) => {
  try {
    const { userName, userPassword } = req.body;
    console.log(`userName: ${userName}, userPassword: ${userPassword}`);
    const userToDatabase = await User.create({
      userName,
      userPassword,
    });
    console.log(`userToDatabase: ${userToDatabase}`);

    res.status(200).send({ ok: true });
  } catch (error) {
    console.log(error);
    res.status(500).send("error in register");
  }
};

export const userLogin = async (req: any, res: any) => {
  try {
    const { userName, userPassword } = req.body;
    console.log(userName, userPassword);
    const userFromDatabase = await User.findOne({ userName, userPassword });
    if (!userFromDatabase) throw new Error("the date didn't arrive");
    console.log(userFromDatabase);
    res.cookie("user", userFromDatabase._id, {
      maxAge: 50000000,
      httpOnly: true,
    });
    res.status(200).send({ ok: true });
  } catch (error: any) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

export const getDatabaseUser = async (req: any, res: any) => {
  try {
    const { user } = req.cookies;
    console.log(user);
    const userFromCookies: any = await User.findById(user);
    if (!userFromCookies)
      throw new Error("problem with function getDatabaseUser");
    console.log(userFromCookies);
    res.send({ userFromCookies });
  } catch (error: any) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};
