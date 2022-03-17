const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('order', {
        id: {
            type: DataTypes.INTEGER(),
            primaryKey: true,
            autoIncrement: true,
        },
        total: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        status: {
            type: DataTypes.ENUM('pending', 'complete', 'canceled'),
            defaultValue:'pending',
            allowNull: false
        },
        // cuando le pedimos la fecha, la entrega formateada en dia/mes/año y en hora argentina, se calcula apartir del createdAt timestamp
        date: {
            type: DataTypes.VIRTUAL,
            get(){
                        return this.getDataValue('createdAt').toLocaleString('en-GB', {timeZone: 'America/Buenos_Aires'})
            },
            set(value){
                throw new Error('Do not try to set the "date" value!');
            }
        }

    },{
        timestamps: true,
        updatedAt: false,
        
    })
}