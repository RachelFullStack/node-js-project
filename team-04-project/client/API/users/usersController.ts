import User from "./usersModel";

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
    res.cookie("user", databaseUser._id, {
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
    const databaseUser: any = await User.findById(user);
    if (!databaseUser)
      throw new Error("problem with function getDatabaseUser");
    console.log(databaseUser);
    res.send({ databaseUser });
  } catch (error: any) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};
