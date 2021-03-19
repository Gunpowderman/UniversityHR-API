//dependancies
const express = require("express");
const router = express.Router();

//imports
const {
  employeeCreate,
  employeeList,
  employeeUpdate,
  employeeDelete,
} = require("../controllers/employeeController");

//show list
router.get("/", employeeList);

//delete employee
router.delete("/:employeeId", employeeDelete);

//create employee
router.post("/", employeeCreate);

//update employee
router.put("/:employeeId", employeeUpdate);

module.exports = router;
