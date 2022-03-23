const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("review", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      comment: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      rate: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    },
    {
      timestamps: false,
    }
  );
};
