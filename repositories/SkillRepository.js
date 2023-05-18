import Skill from "../models/SkillModel.js";

const createSkill = async (name) => {
  try {
    const newSkill = Skill.create(name);
    return newSkill;
  } catch (error) {
    return error;
  }
};

const readSkill = async () => {
  try {
    const allSkill = Skill.find().select("name -_id");
    return allSkill;
  } catch (error) {
    return error;
  }
};

const updateSkill = async () => {};

const deleteSkill = async () => {};

export default {
  createSkill,
  readSkill,
  updateSkill,
  deleteSkill,
};
