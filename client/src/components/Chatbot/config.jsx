import React from "react";
// Config starter code
import { createChatBotMessage } from "react-chatbot-kit";
import Options  from "./Options";
import IconBotAvatar from "./IconBotAvatar";
import CustomChatMessage from "./CustomChatMessage";
import Offers from "./Offers";
import Register from "./Register";
import Product from "./Product";
import OrdersBot from "./OrdersBot";
import MercadoPago from "./MercadoPago";
import ViewProfile from "./ViewProfile";

const config = {
    botName: "ElectroShop Chatbot",
   
   
    initialMessages: [
        createChatBotMessage(`Hello, How can I help you?`,{
            withAvatar: true,
        widget: "options",
        delay: 1000,
    }), 
 ],

      widgets: [
        {
            widgetName: "options",
            widgetFunc:(props) => <Options {...props} />,
        },
        {
            widgetName: 'offers',
            widgetFunc: (props) => <Offers {...props} /> ,
            mapStateToProps: ["offers"],
        },
        {
            widgetName: 'payments',
            widgetFunc: (props) => <MercadoPago {...props} /> ,
            mapStateToProps: ["payments"],
        },
        {
            widgetName: 'profile',
            widgetFunc: (props) => <ViewProfile {...props} /> ,
            mapStateToProps: ["profile"],
        },
        {
            widgetName: 'register',
            widgetFunc: (props) => <Register {...props} /> ,
        },
        {
            widgetName: 'products',
            widgetFunc: (props) => <Product {...props} /> ,
            mapStateToProps: ["products"],
        },
        {
            widgetName: 'ordersBot',
            widgetFunc: (props) => <OrdersBot {...props} /> ,
            
        },

    ],
    customComponents: {
        
        botAvatar: (props) => <IconBotAvatar  {...props} />,
        customChatMessage: (props) => <CustomChatMessage {...props} />,
        
},
customStyles: {
    botMessageBox: {
        backgroundColor: "grey",
        borderRadius: "10px",
        height: "100px",
    },
    chatButton: {
        backgroundColor: "grey",
        borderRadius: "5px",
    },


    
},
state: {
    offers: []
},


};

export default config
