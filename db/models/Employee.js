//dependancies
const SequelizeSlugify = require("sequelize-slugify");

module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define("Employee", {
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    nationality: {
      type: DataTypes.STRING,
    },
    gender: {
      type: DataTypes.STRING,
    },
    dob: {
      type: DataTypes.DATEONLY,
    },
    salary: {
      type: DataTypes.INTEGER,
    },
    extension: {
      type: DataTypes.INTEGER,
    },
    sickDays: {
      type: DataTypes.INTEGER,
    },
    vacationDays: {
      type: DataTypes.INTEGER,
    },
    hireDate: {
      type: DataTypes.DATEONLY,
    },
    slug: {
      type: DataTypes.STRING,
      unique: true,
    },
    profilePicture: {
      type: DataTypes.STRING,
    },
  });

  SequelizeSlugify.slugifyModel(Employee, {
    source: ["firstName"],
  });

  return Employee;
};
