import skillRepository from "../repositories/SkillRepository.js";

const createSkill = async (req, res) => {
  try {
    let newSkill = await skillRepository.createSkill(req.body);
    res.json({
      message: "Insert skill successfully",
      data: newSkill,
    });
  } catch (error) {
    res.json(error);
  }
};

const readSkill = async (req, res) => {
  try {
    let allSkill = await skillRepository.readSkill()
    res.json({
      message: "All Skills",
      data: allSkill,
    })
  } catch (error) {
    res.json(error)
  }
}

const updateSkill = async (req, res) => {

}

const deleteSkill = async (req, res) => {

}

export default {
    createSkill,
    readSkill,
    updateSkill,
    deleteSkill,
}