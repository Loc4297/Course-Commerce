import courseRepository from "../repositories/CourseRepository.js";

const createCourse = async (req, res) => {
  try {
    let newCourse = await courseRepository.createCourse(req.body);
    res.json({
      data: newCourse,
    });
  } catch (error) {
    res.json(error);
  }
};

const readCourse = async (req, res) => {
  const query = req.query;
  try {
    let objWhere ={};
    if (query.search) {
      objWhere.name = new RegExp(query.search, "i");
    }
    if (query.skill) {
      const skill = JSON.parse(query.skill);
      objWhere = { ...objWhere, skill: { $in: skill } };
    }
    if (query.level) {
      const level = JSON.parse(query.level);
      objWhere = { ...objWhere, level: { $in: level } };
    }
    let listCourse = await courseRepository.readCourse(objWhere);
    res.json({
      data: listCourse,
    });
  } catch (error) {
    res.json([]);
  }
};

const updateCourse = async (req, res) => {};

const deleteCourse = async (req, res) => {};

export default {
  createCourse,
  readCourse,
  updateCourse,
  deleteCourse,
};
