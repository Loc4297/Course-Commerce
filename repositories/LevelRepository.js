import Level from "../models/LevelModel.js";

const createLevel = async (name) => {
  try {
    const newLevel = Level.create(name);
    return newLevel;
  } catch (error) {
    return error;
  }
};

const readLevel = async () => {
  try {
    const allLevel = await Level.find().select("name -_id");
    return allLevel;
  } catch (error) {
    return error;
  }
};

const updateLevel = async () => {};

const deleteLevel = async () => {};

export default {
  createLevel,
  readLevel,
  updateLevel,
  deleteLevel,
};
