const { User, Product} = require('../db');

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("visited_product", {
      user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
          model: User,
          key: id
        }
      },
      product_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
          model: Product,
          key: id
        }
      }
    },
    {
      timestamps: false,
    }
  );
};
