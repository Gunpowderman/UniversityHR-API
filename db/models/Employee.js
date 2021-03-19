//dependancies
const SequelizeSlugify = require("sequelize-slugify");

module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define("Employee", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nationality: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    salary: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
      },
    },
    extension: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sickDays: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 15,
      validate: {
        min: 0,
      },
    },
    vacationDays: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 30,
      validate: {
        min: 0,
      },
    },
    hireDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: Date.now(),
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
