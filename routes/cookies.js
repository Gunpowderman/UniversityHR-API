//dependancies
const express = require("express");
const router = express.Router();

//imports
const {
  employeeCreate,
  employeeList,
  cookieUpdate,
  cookieDelete,
} = require("../controllers/cookieController");

//show list
router.get("/", employeeList);

//delete cookies
router.delete("/:cookieId", cookieDelete);

//create cookie
router.post("/", employeeCreate);

//update cookie
router.put("/:cookieId", cookieUpdate);

module.exports = router;
