const { DataTypes } = require('sequelize');

function getWeekday(){
  var today = new Date();
  var day = today.getDay();
  var daylist = ["sunday","monday","tuesday","wednesday ","thursday","friday","saturday"];
  return daylist[day]
}

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
      type: DataTypes.VIRTUAL,
      get(){
        return this.getDataValue(`discount_${getWeekday()}`)
      },
      set(value){
        let realValue = value.split(' ')
        this.setDataValue(realValue[0], realValue[1])
      }
    },
    discount_monday: {
      type: DataTypes.FLOAT,
      defaultValue: 0
    },
    discount_tuesday: {
      type: DataTypes.FLOAT,
      defaultValue: 0
    },
    discount_wednesday: {
      type: DataTypes.FLOAT,
      defaultValue: 0
    },
    discount_thursday: {
      type: DataTypes.FLOAT,
      defaultValue: 0
    },
    discount_friday: {
      type: DataTypes.FLOAT,
      defaultValue: 0
    },
    discount_saturday: {
      type: DataTypes.FLOAT,
      defaultValue: 0
    },
    discount_sunday: {
      type: DataTypes.FLOAT,
      defaultValue: 0
    },
    discounted_price: {
      type: DataTypes.VIRTUAL,
      get(){
        return this.getDataValue('price') * ( 100 - this.getDataValue(`discount_${getWeekday()}`)) / 100 
      },
      set(){
        throw new Error ("Don't try to set this field");
      }
    }
  },{
    timestamps: false
  });
};
