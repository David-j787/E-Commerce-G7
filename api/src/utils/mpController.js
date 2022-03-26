const mercadopago = require("mercadopago");

module.exports = {
    createOrderMP: async (req, res) => {
        const { products } = req.body
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
            res.json(response)
        }, err => console.log(err))
    },
    notificationOrder: async (req, res) => {
        const { data } = req.query;
        const infoPayment = await axios.get(`https://api.mercadopago.com/v1/payments/${data.id}`)
        res.status(200)
    }
} 