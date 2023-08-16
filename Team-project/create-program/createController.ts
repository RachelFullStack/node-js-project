import AllDataModel from "./createModel";
import { Category } from "./createModel";
import { program } from "./createModel";

export const getAllData = async (req: any, res: any) => {
  try {
    const allData = await AllDataModel.find({})
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
    const newCategory = await Category.create({
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
    const programData = req.body;

    const newPrograms = await Promise.all(
      programData.map(async (tableData: any) => {
        const exercises = await Promise.all(
          tableData.map(async (exercise: any) => {
            const newExercise = await program.create(exercise);
            return newExercise._id;
          })
        );

        return exercises;
      })
    );

    const newAllData = await AllDataModel.create({
      category: req.body.categoryId,
      program: newPrograms.flat(),
    });

    console.log(newAllData);
    res.status(200).send({ ok: true });
  } catch (error) {
    console.log(error);
    res.status(500).send("didn't get data");
  }
};

export const getProgramData = async (req: any, res: any) => {
  try {
    const allProgramData = await AllDataModel.find({})
      .populate("category")
      .populate("program")
      .exec();
    res.send({ allProgramData });
  } catch (error) {
    console.log(error);
    res.status(500).send("error");
  }
};
