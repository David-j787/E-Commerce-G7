const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('payment', {
        id: {
            // id del pago
            type: DataTypes.INTEGER(),
            primaryKey: true,
        },
        card_expiration_month: {
            type: DataTypes.INTEGER(2),
        },
        card_expiration_year: {
            type: DataTypes.INTEGER(4),
        },
        card_first_six_digits: {
            type: DataTypes.INTEGER(6)
        },
        card_last_four_digits: {
            type: DataTypes.INTEGER(4)
        },
        description: {
            // descripción del cargo eg, "computadora gamer"
            type: DataTypes.STRING()
        },
        installments: {
            // número de quotas, 1
            type: DataTypes.INTEGER(),
        },
        money_release_date: {
            // fecha en que se liberó el pago
            type: DataTypes.DATE(),
        },
        payment_method_id: {
            // visa
            type: DataTypes.STRING(20),
        },
        payment_type_id: {
            // credit card
            type: DataTypes.STRING(20),
        },
        status: {
            // ''aproved''
            type: DataTypes.STRING(),
        },
        installment_amount: {
            // valor de las quotas, ej, $16
            type: DataTypes.FLOAT(),
        },
        net_received_amount: {
            // pago que recibió el e-commerce
            type: DataTypes.FLOAT(),
        },
        total_paid_amount: {
            // total que pagó el cliente
            type: DataTypes.FLOAT(),
        },
        fee: {
            //comisiones que cobraron al e-commerce
            type: DataTypes.VIRTUAL,
            get(){
                return this.getDataValue('total_paid_amount') - 
                this.getDataValue('net_received_amount')
            },
            set(value){
                throw new Error("Do not try to set the 'fee' value!");
            }
        }
    },{
        timestamps: false,
    })
}