const mercadopago = require("mercadopago");
const { Payment, Order } = require('../db')
const axios = require('axios');
let orderID;

const token = "TEST-6508683784266795-032614-c5ed10e47bd215455fd52c34b5f9ff16-56958058";

module.exports = {
    createOrderMP: async (req, res) => {
        const { products, orderId } = req.body
        console.log(products)
        orderID = orderId
        mercadopago.configure({
        access_token: token,
        });
    
        // Crea un objeto de preferencia
        let preference = {
            items: products?.map(product => ({
                title: product.name,
                unit_price: product.price,
                quantity: product.amount
            })),
            back_urls:{
                failure: "http://localhost:3000/order/failure",
                pending: "http://localhost:3000/order/pending",
                success: "http://localhost:3000/order/success"
            },
            auto_return: 'approved',
                              //localhost:3001/notification
            notification_url:'https://c604-181-31-154-43.ngrok.io/notification',
        };
        mercadopago.preferences.create(preference)
        .then(response => {
            res.json(response)
        }, err => console.log(err))
    },
    notificationOrder: async (req, res) => {
        const data = req.query;
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        console.log(data['data.id']);
        console.log(orderID);
        res.status(200);       
        if(data['data.id']){
            const infoPayment = await axios.get(`https://api.mercadopago.com/v1/payments/${data['data.id']}`, config)
            try {
                if(infoPayment.data.status === 'approved'){
                    const [payment, newPayment] = await Payment.findOrCreate({
                        where: { id_meli: infoPayment.data.id },
                        defaults: {
                        id_meli: infoPayment.data.id,
                        card_expiration_month: infoPayment.data.card.expiration_month,
                        card_expiration_year: infoPayment.data.card.expiration_year,
                        card_first_six_digits: infoPayment.data.card.first_six_digits,
                        card_last_four_digits: infoPayment.data.card.last_four_digits,
                        description: infoPayment.data.description,
                        installments: infoPayment.data.installments,
                        money_release_date: infoPayment.data.money_release_date,
                        payment_method_id: infoPayment.data.payment_method_id,
                        payment_type_id: infoPayment.data.payment_type_id,
                        status: infoPayment.data.status,
                        installment_amount: infoPayment.data.transaction_details.installment_amount,
                        net_received_amount: infoPayment.data.transaction_details.net_received_amount,
                        total_paid_amount: infoPayment.data.transaction_details.total_paid_amount
                    }})
                    if(newPayment){
                        /* const order = await Order.findByPk(orderID);
                        if(!order) throw Error('Order not found');
                        order.addPayment(newPayment); */
                    }
                }             
                res.status(200);
            } catch (err) {
                console.log(err);
            }
    }
    }
} 