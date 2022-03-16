const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('product', {
    id: {
      type: DataTypes.STRING,
      validate: {
        isAlphanumeric: true,
        len: [10]
      },
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(200),
      validate: {
        len: [5, 100]
      },
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT
    },
    images: {
      type: DataTypes.TEXT
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    rating: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  },{
    timestamps: false
  });
};
