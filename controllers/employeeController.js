//import our database
const { Employee } = require("../db/models");
const { Department } = require("../db/models");
const { Job } = require("../db/models");

//employee list
exports.employeeList = async (_, res) => {
  try {
    const employees = await Employee.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: [
        {
          model: Department,
          as: "department",
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
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//create employee
exports.employeeCreate = async (req, res) => {
  try {
    const newEmployee = await Employee.create(req.body);
    await req.body.jobId.forEach(async (id) => {
      const job = await Job.findByPk(id);
      newEmployee.addJob(job);
    });
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//update employee
exports.employeeUpdate = async (req, res) => {
  const { employeeId } = req.params;
  try {
    const foundEmployee = await Employee.findByPk(employeeId);
    if (foundEmployee) {
      await foundEmployee.update(req.body);
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Employee not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//delete employee
exports.employeeDelete = async (req, res) => {
  const { employeeId } = req.params;
  try {
    const foundEmployee = await Employee.findByPk(employeeId);
    if (foundEmployee) {
      await foundEmployee.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Employee not found" });
    }
  } catch (err) {
    res.status(500).json({ message: error.message });
  }
};
