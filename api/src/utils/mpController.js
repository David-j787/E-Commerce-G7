const mercadopago = require("mercadopago");
const { Payment, Order } = require('../db')
const axios = require('axios');

module.exports = {
    createOrderMP: async (req, res) => {
        const { products, orderId } = req.body
        mercadopago.configure({
        access_token: "TEST-8559540551319909-032518-d17fb570f620b231bb0f76aaca5c690c-1095956071",
        });
    
        // Crea un objeto de preferencia
        let preference = {
            items: products?.map(product => ({
                title: product.name,
                unit_price: product.price,
                quantity: product.amount
            })),
                              //localhost:3001/notification
            notification_url:'https://196f-2803-9800-b010-81fa-4427-ef40-f46c-5348.ngrok.io/notification',
        };
        mercadopago.preferences.create(preference)
        .then(response => {
            req.body.userId = orderId
            res.json(response)
        }, err => console.log(err))
    },
    notificationOrder: async (req, res, next) => {
        const { orderId } = req.body;
        const data = req.query;
        const infoPayment = await axios.get(`https://api.mercadopago.com/v1/payments/${data.id}`)
        // if(infoPayment){
        //     req.body.infoPayment = infoPayment;
        //     next();
        // }
        try {
            const newPayment = await Payment.create({
                id_meli: infoPayment.id,
                card_expiration_month: infoPayment.card.expiration_month,
                card_expiration_year: infoPayment.card.expiration_year,
                card_first_six_digits: infoPayment.card.first_six_digits,
                card_last_four_digits: infoPayment.card.last_four_digits,
                description: infoPayment.description,
                installments: infoPayment.installments,
                money_release_date: infoPayment.money_release_date,
                payment_method_id: infoPayment.payment_method_id,
                payment_type_id: infoPayment.payment_type_id,
                status: infoPayment.status,
                installment_amount: infoPayment.transaction_details.installment_amount,
                net_received_amount: infoPayment.transaction_details.net_received_amount,
                total_paid_amount: infoPayment.transaction_details.total_paid_amount
            })
            const order = await Order.findByPk(orderId);
            if(!order) throw Error('Order not found');
            order.setPayment(newPayment);
            res.json(order);
        } catch (err) {
            res.status(403).json('Error occurred: ' + err);
        }
    },
    savePayment: async (req, res) => {
        try {
            const { infoPayment, orderId } = req.body;
            const newPayment = await Payment.create({
                id_meli: infoPayment.id,
                card_expiration_month: infoPayment.card.expiration_month,
                card_expiration_year: infoPayment.card.expiration_year,
                card_first_six_digits: infoPayment.card.first_six_digits,
                card_last_four_digits: infoPayment.card.last_four_digits,
                description: infoPayment.description,
                installments: infoPayment.installments,
                money_release_date: infoPayment.money_release_date,
                payment_method_id: infoPayment.payment_method_id,
                payment_type_id: infoPayment.payment_type_id,
                status: infoPayment.status,
                installment_amount: infoPayment.transaction_details.installment_amount,
                net_received_amount: infoPayment.transaction_details.net_received_amount,
                total_paid_amount: infoPayment.transaction_details.total_paid_amount
            });
            const order = await Order.findByPk(orderId);
            if(!order) throw Error('Order not found');
            order.setPayment(newPayment);
            res.json(order);
        } catch (err) {
            res.status(403).json('Error occurred: ' + err);
        }
    }
} 