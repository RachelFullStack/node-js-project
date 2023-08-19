import User from "./model";
import { Info, Table, AllData } from "./model";

///// USER /////

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
    if (!databaseUser) throw new Error("problem with function getDatabaseUser");
    console.log(databaseUser);
    res.send({ databaseUser });
  } catch (error: any) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

///// CREATE /////
export const getInfos = async (_req: any, res: any) => {
  try {
    const Infos = await Info.find({});
    res.send({ Infos });
  } catch (error) {
    console.log(error);
    res.status(500).send("error");
  }
};

export const deleteAllData = async (req: any, res: any) => {
  try {
    const _id = req.body._id;
    console.log(_id);

    if (!_id) throw new Error(`ID not found`);
    const AllDataIndex = await AllData.findByIdAndDelete(_id);
    const allData = await AllData.find({})
      .populate("Info")
      .populate("Table")
      .exec();
    res.send({ allData });
  } catch (error) {
    console.log(error);
    res.status(500).send("Failed to delete AllData");
  }
};

export const addInfo = async (req: any, res: any) => {
  try {
    const { Days, Equipment, Level, WorkoutTime } = req.body;
    const newInfo = await Info.create({
      Days: Days,
      Equipment: Equipment,
      Level: Level,
      WorkoutTime: WorkoutTime,
    });
    console.log(newInfo);
    res.status(200).send({ ok: true });
  } catch (error) {
    console.log(error);
    res.status(500).send("Failed to add Info");
  }
};

export const addTable = async (req: any, res: any) => {
  try {
    const { Exercise, Image, Sets, Reps } = req.body;
    const newTable = await Table.create({
      Exercise: Exercise,
      Image: Image,
      Sets: Sets,
      Reps: Reps,
    });
    console.log(newTable);
    res.status(200).send({ ok: true });
  } catch (error) {
    console.log(error);
    res.status(500).send("Failed to add Table");
  }
};

export const addAllData = async (req: any, res: any) => {
  try {
    const { dataObject, AllDataData } = req.body;

    console.log(dataObject);
    console.log(AllDataData);

    const newAllDatas = await Promise.all(
      AllDataData.map(async (tableData: any) => {
        const Tables = await Promise.all(
          tableData.map(async (Table: any) => {
            const newTable = await Table.create(Table);
            return newTable._id;
          })
        );

        return Tables;
      })
    );

    const newAllData = await AllData.create({
      Info: req.body.categoryId,
      Table: newAllDatas.flat(),
    });

    res.status(200).send({ ok: true });
  } catch (error) {
    console.log(error);
    res.status(500).send("Failed to add AllData");
  }
};

export const getAllDataData = async (_req: any, res: any) => {
  try {
    const allData = await AllData.find({})
      .populate("Info")
      .populate("Table")
      .exec();
    res.send({ allData });
  } catch (error) {
    console.log(error);
    res.status(500).send("error");
  }
};
