import React from "react";
// Config starter code
import { createChatBotMessage } from "react-chatbot-kit";
import Options  from "./Options";
import IconBotAvatar from "./IconBotAvatar";
import CustomChatMessage from "./CustomChatMessage";
import Offers from "./Offers";
import Register from "./Register";
import Product from "./Product";




const config = {
    botName: "Sneakers Chatbot",
   
   
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
            widgetName: 'register',
            widgetFunc: (props) => <Register {...props} /> ,
        },
        {
            widgetName: 'products',
            widgetFunc: (props) => <Product {...props} /> ,
            mapStateToProps: ["products"],
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
    },
    chatButton: {
        backgroundColor: "grey",
        borderRadius: "10px",
    },


    
},
state: {
    offers: []
},


};

export default config
