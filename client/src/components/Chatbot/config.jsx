import React from "react";
// Config starter code
import { createChatBotMessage } from "react-chatbot-kit";
import Options  from "./Options";
import OptionsES from "./OptionsEs";
import IconBotAvatar from "./IconBotAvatar";
import CustomChatMessage from "./CustomChatMessage";
import Offers from "./Offers";
import Register from "./Register";
import Product from "./Product";
import ProductES from "./ProductES";
import OrdersBot from "./OrdersBot";
import MercadoPago from "./MercadoPago";
import ViewProfile from "./ViewProfile";

var config={};
var Lang="es";


if (Lang==="en"){
     config = {
   


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
}
else if( Lang="es"){config = {
   
    botName: "Sneakers Chatbot",
    
    initialMessages: [
        createChatBotMessage(`Hola en que puedo ayudarte?`,{
            withAvatar: true,
            widget: "optionsES",
            delay: 1000,
    }), 
 ],

      widgets: [
        {
            widgetName: "options",
            widgetFunc:(props) => <Options {...props} />,
        }, {
            widgetName: "optionsES",
            widgetFunc:(props) => <OptionsES {...props} />,
        },
        {
                widgetName: 'offers',
                widgetFunc: (props) => <Offers {...props} /> ,
                mapStateToProps: ["offers"],
        },
        {
            widgetName: 'registro',
            widgetFunc: (props) => <Register {...props} /> ,
        },
        {
            widgetName: 'products',
            widgetFunc: (props) => <Product {...props} /> ,
            mapStateToProps: ["products"],
        },
        {
            widgetName: 'productos',
            widgetFunc: (props) => <ProductES {...props} /> ,
            mapStateToProps: ["products"],
        },
        {
            widgetName: 'ordersBot',
            widgetFunc: (props) => <OrdersBot {...props} /> ,
            
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

    ],
    customComponents: {
        
        botAvatar: (props) => <IconBotAvatar  {...props} />,
        customChatMessage: (props) => <CustomChatMessage {...props} />,
        header: (props) => <h4>Conversacion con Chatbot </h4>,
        
},
customStyles: {
    botMessageBox: {
        backgroundColor: "grey",
        borderRadius: "10px",
    },
    chatButton: {
        backgroundColor: "grey",
        borderRadius: "10px",
    },


    
},
state: {
    offers: []
},

};;
}

export default config
