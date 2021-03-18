//import our database
const { Employee } = require("../db/models");

//employee list
exports.employeeList = async (req, res) => {
  try {
    const employees = await Employee.findAll();
    attributes: {
      exclude: ["createdAt", "updatedAt"];
    }
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//create employee
exports.employeeCreate = async (req, res) => {
  try {
    const newEmployee = await Employee.create(req.body);
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//update employee
exports.cookieUpdate = (req, res) => {
  const { cookieId } = req.params;
  const foundCookie = cookies.find((cookie) => cookie.id === +cookieId);
  if (foundCookie) {
    for (const key in req.body) foundCookie[key] = req.body[key];
    res.status(204).end();
  } else {
    res.status(404).json({ message: "Cookie not found" });
  }
};

//delete employee
exports.cookieDelete = (req, res) => {
  const { cookieId } = req.params;
  const foundCookie = cookies.find((cookie) => cookie.id === +cookieId);
  if (foundCookie) {
    cookies = cookies.filter((cookie) => cookie !== foundCookie);
    res.status(204).end();
  } else {
    res.status(404).json({ message: "Cookie not found" });
  }
};
