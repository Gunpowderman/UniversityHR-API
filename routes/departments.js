//dependancies
const express = require("express");
const router = express.Router();

//imports
const {
  departmentCreate,
  departmentList,
  departmentUpdate,
  departmentDelete,
} = require("../controllers/departmentController");

//show list
router.get("/", departmentList);

//delete department
router.delete("/:departmentId", departmentDelete);

//create department
router.post("/", departmentCreate);

//update department
router.put("/:departmentId", departmentUpdate);

module.exports = router;
