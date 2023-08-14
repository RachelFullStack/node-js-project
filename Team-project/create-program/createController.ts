import AllDataModel from "./createModel";
import { Category } from "./createModel";
import { program } from "./createModel";

export const getAllData = async (req: any, res: any) => {
  try {
    const allData = await AllDataModel.find({}) // Use AllDataModel instead of AllData
      .populate("category")
      .populate("program")
      .exec();
    res.send({ allData });
  } catch (error) {
    console.log(error);
    res.status(500).send("error");
  }
};

export const getCategories = async (req: any, res: any) => {
  try {
    const category = await Category.find({});
    res.send({ category });
  } catch (error) {
    console.log(error);
    res.status(500).send("error");
  }
};

export const deleteAllData = async (req: any, res: any) => {
  try {
    const _id = req.body;
    console.log(_id);

    if (!_id) throw new Error(`uis not found`);
    const AllDataIndex = await AllDataModel.findByIdAndDelete(_id);
    const AllData = await AllDataModel.find({})
      .populate("category")
      .populate("program")
      .exec();
    res.send({ AllData });
  } catch (error) {
    console.log(error);
    res.status(500).send("didn't get AllData to delete");
  }
};

export const addCategory = async (req: any, res: any) => {
  try {
    const { Days, Equipment, level, WorkoutTime } = req.body;
    const nerCategory = await Category.create({
      Days,
      Equipment,
      level,
      WorkoutTime,
    });

    res.status(200).send({ ok: true });
  } catch (error) {
    console.log(error);
  }
};

export const addProgram = async (req: any, res: any) => {
  try {
    const { Exercise, image, sets, reps } = req.body;

    const newProgram = await program.create({
      Exercise,
      image,
      sets,
      reps,
    });

    console.log(newProgram);
  } catch (error) {
    console.log(error);
    res.status(500).send("didn't get data");
  }
};
