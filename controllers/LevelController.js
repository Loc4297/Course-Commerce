import levelRepository from "../repositories/LevelRepository.js";

const createLevel = async (req, res) => {
  try {
    let newLevel = await levelRepository.createLevel(req.body);
    res.json({
      message: "Insert level successfully",
      data: newLevel,
    });
  } catch (error) {
    res.json(error);
  }
};

const readLevel = async (req, res) => {
  try {
    let allLevel = await levelRepository.readLevel();
    res.json({
      message: "All Levels",
      data: allLevel,
    });
  } catch (error) {
    res.json(error);
  }
};

const updateLevel = async (req, res) => {

}

const deleteLevel = async (req, res) => {

}
export default {
  createLevel,
  readLevel,
  updateLevel,
  deleteLevel,
};
