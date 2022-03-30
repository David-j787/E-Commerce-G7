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
        len: [5, 200]
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
      type: DataTypes.FLOAT,
      defaultValue: 0
    },
    discount: {
      type: DataTypes.FLOAT,
      defaultValue: 0
    },
    discounted_price: {
      type: DataTypes.VIRTUAL,
      get(){
        return this.getDatavalue('price') * ( 100 - this.getDatavalue('discount')) / 100 
      },
      set(){
        throw new Error ("Don't try to set this field");
      }
    }
  },{
    timestamps: false
  });
};
