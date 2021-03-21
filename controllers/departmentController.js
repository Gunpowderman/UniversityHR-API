//import our database
const { Department } = require("../db/models");
const { Employee } = require("../db/models");
const { Job } = require("../db/models");

//department list
exports.departmentList = async (_, res) => {
  try {
    const departments = await Department.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: [
        {
          model: Employee,
          as: "employee",
          attributes: { exclude: ["createdAt", "updatedAt"] },
        },
        {
          model: Job,
          as: "job",
          attributes: { exclude: ["createdAt", "updatedAt"] },
          through: { attributes: [] },
        },
      ],
    });

    res.json(departments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//create department
exports.departmentCreate = async (req, res) => {
  try {
    const newDepartment = await Department.create(req.body);
    res.status(201).json(newDepartment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//update department
exports.departmentUpdate = async (req, res) => {
  const { departmentId } = req.params;
  try {
    const foundDepartment = await Department.findByPk(departmentId);
    if (foundDepartment) {
      await foundDepartment.update(req.body);
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Department not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//delete department
exports.departmentDelete = async (req, res) => {
  const { departmentId } = req.params;
  try {
    const foundDepartment = await Department.findByPk(departmentId);
    if (foundDepartment) {
      await foundDepartment.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Department not found" });
    }
  } catch (err) {
    res.status(500).json({ message: error.message });
  }
};
