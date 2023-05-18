import Course from "../models/CourseModel.js";

const createCourse = async ({ name, price, level, skill }) => {
  try {
    const checkName = await Course.findOne({ name }).exec();
    if (checkName) {
      return "Name already in use";
    } else {
      const newCourse = await Course.create({
        name,
        price,
        level,
        skill,
      });
      return newCourse;
    }
  } catch (error) {
    return error;
  }
};

const readCourse = async (objWhere) => {
  try {
      const listCourse = await Course.find(objWhere).select("name price -_id").sort({"name": 1});
      return listCourse;
  } catch (error) {
    return error;
  }
};

const updateCourse = async ({}) => {};

const deleteCourse = async ({}) => {};



export default {
  createCourse,
  readCourse,
  updateCourse,
  deleteCourse,
};
