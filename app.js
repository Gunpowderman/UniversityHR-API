//dependancies
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

//import
const employeesRoutes = require("./routes/employees");
const departmentsRoutes = require("./routes/departments");
const jobsRoutes = require("./routes/jobs");
const db = require("./db/models");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/employee", employeesRoutes);
app.use("/department", departmentsRoutes);
app.use("/job", jobsRoutes);

const run = async () => {
  try {
    await db.sequelize.sync();
    console.log("Connection to the database successful!");
    await app.listen(8000, () => {
      console.log("The application is running on localhost:8000");
    });
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }
};

run();
