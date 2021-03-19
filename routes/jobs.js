//dependancies
const express = require("express");
const router = express.Router();

//imports
const {
  jobCreate,
  jobList,
  jobUpdate,
  jobDelete,
} = require("../controllers/jobController");

//show list
router.get("/", jobList);

//delete job
router.delete("/:jobId", jobDelete);

//create job
router.post("/", jobCreate);

//update job
router.put("/:jobId", jobUpdate);

module.exports = router;
