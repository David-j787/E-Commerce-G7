const { Category } = require('../db');

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("discount_category", {
      category_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
          model: Category,
          key: id
        }
      },
      discount: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    },
    {
      timestamps: false,
    }
  );
};
