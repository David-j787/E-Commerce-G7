const { User } = require('../db');

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("two_fa", {
      user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
          model: User,
          key: id
        }
      },
      code: {
        type: DataTypes.STRING,
        allowNull: false
      },
    },
    {
      timestamps: false,
    }
  );
};
