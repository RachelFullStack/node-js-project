import Workout from "../workout/workoutModel";
import Category from "../category/categoryModel";
import Program from "../program/programModel";
import AllData from "../workout/workoutModel";

// --------------------------------------------------------------------//
export const addCategory = async (req: any, res: any) => {
  try {
    console.log(req.body);
    const { Days, Equipment, Level, WorkoutTime, Title } = req.body;
    const newCategory = await Category.create({
      Days: Days,
      Equipment: Equipment,
      Level: Level,
      WorkoutTime: WorkoutTime,
      Title: Title,
    });

    res.status(200).json({
      ok: true,
      message: "Category created successfully.",
      id: newCategory._id,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      error: "Failed to create category.",
    });
  }
};

// --------------------------------------------------------------------//
export const getCategories = async (req: any, res: any) => {
  try {
    const category = await Category.find({});
    res.send({ category });
  } catch (error) {
    console.log(error);
    res.status(500).send("error");
  }
};

// --------------------------------------------------------------------//
export const getAllData = async (req: any, res: any) => {
  try {
    const allData = await AllData.find({})
      .populate("category")
      .populate("program")
      .exec();
    res.send({ allData });
  } catch (error) {
    console.log(error);
    res.status(500).send("error");
  }
};

// --------------------------------------------------------------------//
export const addWorkOut = async (req: any, res: any) => {
  try {
    const { programData } = req.body;

    const newPrograms = await Promise.all(
      programData.map(async (tableData: any) => {
        const exercises = await Promise.all(
          tableData.map(async (exercise: any) => {
            const newExercise = await Program.create(exercise);
            return newExercise._id;
          })
        );

        return exercises;
      })
    );

    // --------------------------------------------------------------------//
    const newAllData = await Workout.create({
      category: req.body.CategoryId,
      program: newPrograms.flat(),
    });

    res.status(200).json({
      ok: true,
      message: "Program created successfully.",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      error: "Failed to create program.",
    });
  }
};

// --------------------------------------------------------------------//
export const getWorkouts = async (req: any, res: any) => {
  try {
    const allProgramData = await Workout.find({})
      .populate("category")
      .populate("program")
      .exec();
    res.status(200).json({
      ok: true,
      message: "Program fetched successfully.",
      workouts: allProgramData,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("error");
  }
};

// --------------------------------------------------------------------//
export const getSingleWorkout = async (req: any, res: any) => {
  const { id } = req.params;

  try {
    const workout = await Workout.findById(id)
      .populate("category")
      .populate("program")
      .exec();

    res.status(200).json({
      ok: true,
      message: "Program fetched successfully.",
      workout: workout,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("error");
  }
};

// edit program name
// -------------------------------
// export const editProgramName = async (req: any, res: any) => {
//   try {
//     const { _id, title } = req.body;
//     console.log(title);
//     console.log(_id);
//     if (!_id) throw new Error("_ID WAN'T FOUND");
//     if (!title) throw new Error("program name WAN'T FOUND");
//     if (title)
//       await AllData.findByIdAndUpdate(_id, {
//         title: title,
//       });
//     const allData = await AllData.find({});
//     res.send({ ok: true, allData });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send(" error of Edit Program Name function:");
//   }
// };

// // delete program
// // -------------------------------
// export const deleteDataCard = async (req: any, res: any) => {
//   try {
//     const { _id } = req.body;
//     console.log(_id);
//     if (!_id) throw new Error("_ID WAN'T FOUND");
//     const deleteAllDataFromCard = await Category.findByIdAndDelete(_id);
//     const allData = await Category.find({});
//     res.send({ ok: true, Category });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send(" error of delete one data card function:", error);
//   }
// };
