// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
require('dotenv').config();
const { SENDGRID_API_KEY } = process.env;
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(SENDGRID_API_KEY);

module.exports = {
    senderByDefault: () => {
        const message = {
        to: 'bnserra@gmail.com', // Change to your recipient
        from: 'noreply.ecommerce.g7@gmail.com', // Change to your verified sender
        subject: 'Sending with SendGrid is Fun 2',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
        }
        sgMail
        .send(message)
        .then(() => {
            console.log('Email sent')
        })
        .catch((error) => {
            console.error(error)
        })
    },
    orderCheckoutSender: (orderedCHANGE) => {
        const order = {
            date: "23/03/2022, 21:52:31",
            id: 1,
            total: 5599.98,
            status: "complete",
            createdAt: "2022-03-24T00:52:31.459Z",
            userId: 2,
            email: 'bnserra@gmail.com',
            address: 'Avellaneda 583 - 5151 - Córdoba',
            products: [
                {
                    id: "1h4i2ls121",
                    name: "Laptop DELL Ryzen 9",
                    price: 2499.99,
                    description: "Ryzen 9 7890x 5.7Ghz AM5+, 32GB RAM DDR5 - RX7900xt",
                    images: "https://http2.mlstatic.com/D_NQ_NP_935056-MLA47074817525_082021-O.webp",
                    stock: 20,
                    rating: 5,
                    product_order: {
                        amount: 1,
                        orderId: 1,
                        productId: "1h4i2ls121"
                    }
                },
                {
                    id: "1h4i2ls321",
                    name: "MacBook Pro 12th Gen",
                    price: 2499.99,
                    description: "New Macbook PRO with Intel 12th Gen Alder Lake Processor",
                    images: "https://http2.mlstatic.com/D_NQ_NP_763737-MLA45297133907_032021-O.webp",
                    stock: 50,
                    rating: 5,
                    product_order: {
                        amount: 1,
                        orderId: 1,
                        productId: "1h4i2ls321"
                    }
                }
            ]
        }

        const message = {
            to: order.email, // Change to your recipient
            from: 'noreply.ecommerce.g7@gmail.com', // Change to your verified sender
            subject: 'Order confirmation',
            dynamic_template_data:{
                name: order.user.name,
                orderNumber: order.id,
                orderStatus: order.status,
                orderLink: `http://localhost:3000/user/order/${order.id}`, // Change on DEPLOY
                orderDate: order.date,
                orderSubtotal: order.total,
                orderTotal: order.total,
                salesTax: 'No fee',
                shippingCost: 'free',
                items: order.products.slice(0, 10)?.map(product => ({
                    productImage: product.images,
                    productName: product.name,
                    product1Detail1: product.description.slice(0, 15),
                    product1Detail2: product.description.slice(15, 30),
                    product1Detail3: product.description.slice(30, 50),
                    productPrice: product.price,
                    productAmount: product.product_order.amount
                })),
                address: order.address,
                zipCode: order.address,
                state: order.state
            },
            template_id: "d-30609f88c0be4b998e5028c35faf7472"
        }
            sgMail
            .send(message)
            .then(() => {
                console.log('Email sent')
            })
            .catch((error) => {
                console.error(error)
            })
    },
    orderStatusChange: (status, order) => {


        const msg = {
        to: 'bnserra@gmail.com', // Change to your recipient
        from: 'noreply.ecommerce.g7@gmail.com', // Change to your verified sender
        subject: 'Order status changed',
        text: 'Greetings, your order status was changed',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
        }
        sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent')
        })
        .catch((error) => {
            console.error(error)
        })
    }
}