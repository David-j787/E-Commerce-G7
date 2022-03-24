const mercadopago = require("mercadopago");

module.exports = {
    createOrderMP: async (req, res) => {
        mercadopago.configure({
        access_token: "TEST-6596838768942079-032414-6ec152147c9a25af6bb30998590e9de6-1095275156",
        });
    
        // Crea un objeto de preferencia
        let preference = {
            purpose: "wallet_purchase",
            items: [
            {
                title: "compu gamer",
                unit_price: 1.5,
                quantity: 1,
            },
            ],
                              //localhost:3001/notification
            notification_url:'https://cdbf-2803-9800-b010-81fa-41e6-4e96-f859-2d5b.ngrok.io/notification',
            back_urls: {
                success: "https://4746-2803-9800-b010-81fa-41e6-4e96-f859-2d5b.ngrok.io",
            },
            payment_methods: {
                excluded_payment_types: [
                    {
                        id: "ticket"
                    }
                ],
                installments: 16
            },
        };
      
        mercadopago.preferences.create(preference)
        .then(response => {
            id: response.body.id
            res.json(response)
        }, err => console.log(err))
    },
    notificationOrder: async (req, res) => {
        const data = req.query;
        console.log(data)
        res.status(200)
    }
} 