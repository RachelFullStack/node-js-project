import User from "./usersModel";

// Register
export const register = async (req: any, res: any) => {
  try {
    const { userName, userPassword } = req.body;

    const user = await User.findOne({ userName });
    if (user) {
      console.log(user);
      res.status(500).json({
        ok: false,
        error: "User already exists.",
      });
      return;
    }

    const databaseUser = await User.create({
      userName,
      userPassword,
    });

    res.status(200).json({
      ok: true,
      message: "User created successfully.",
      databaseUser,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      error: "Failed to create user.",
    });
  }
};


// Login
export const login = async (req: any, res: any) => {
  try {
    const { userName, userPassword } = req.body;

    const databaseUser = await User.findOne({ userName, userPassword });

    if (!databaseUser) {
      res.status(500).json({
        ok: false,
        error: "Failed to login. User not found.",
      });
    } else {

      // const token = jwt.encode({ userId: databaseUser._id }, secret);
      // res.cookie("user", token, {
      //   maxAge: 50000000,
      //   httpOnly: true,
      // });
      res.cookie("user", databaseUser._id, {
        maxAge: 50000000,
        httpOnly: true,
      });
      res.status(200).json({
        ok: true,
        message: "User logged in successfully.",
        userName: databaseUser.userName,
        role: databaseUser.role,
      });
    }
  } catch (error: any) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};


// Get User
export const getUser = async (req: any, res: any) => {
  try {
    const { user } = req.cookies;
    console.log(user);
    // const decoded = jwt.decode(user, secret);
    // const { userId } = decoded;
    // const databaseUser: any = await User.findById(userId);
    const databaseUser: any = await User.findById(user);
    if (!databaseUser) throw new Error("problem with function getDatabaseUser");
    console.log(databaseUser);
    res.send({ databaseUser });
  } catch (error: any) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};
