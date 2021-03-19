//import our database
const { Job } = require("../db/models");

//job list
exports.jobList = async (req, res) => {
  try {
    const jobs = await Job.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//create job
exports.jobCreate = async (req, res) => {
  try {
    const newJob = await Job.create(req.body);
    res.status(201).json(newJob);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//update job
exports.jobUpdate = async (req, res) => {
  const { jobId } = req.params;
  try {
    const foundJob = await Job.findByPk(jobId);
    if (foundJob) {
      await foundJob.update(req.body);
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Job not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//delete job
exports.jobDelete = async (req, res) => {
  const { jobId } = req.params;
  try {
    const foundJob = await Job.findByPk(jobId);
    if (foundJob) {
      await foundJob.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Job not found" });
    }
  } catch (err) {
    res.status(500).json({ message: error.message });
  }
};
