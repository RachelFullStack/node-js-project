import User from "./usersModel";

export const userRegistration = async (req: any, res: any) => {
  try {
    const { userName, userPassword } = req.body;
    console.log(`userName: ${userName}, userPassword: ${userPassword}`);
    const userFromDatabase = await User.create({
      userName,
      userPassword,
    });
    console.log(`userFromDatabase: ${userFromDatabase}`);

    res.status(200).send({ ok: true });
  } catch (error) {
    console.log(error);
    res.status(500).send("error in register");
  }
};
