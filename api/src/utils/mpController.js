const mercadopago = require("mercadopago");

module.exports = {
    createOrderMP: async (req, res) => {
        mercadopago.configure({
        access_token: "TEST-6596838768942079-032414-6ec152147c9a25af6bb30998590e9de6-1095275156",
        });
    
        // Crea un objeto de preferencia
        let preference = {
            items: [
            {
                title: "compu gamer",
                unit_price: 1.5,
                quantity: 1,
            },
            ],
            notification_url:'https://c245-2803-9800-b010-81fa-dd99-3280-8a2e-df46.ngrok.io/notification'
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