import React from "react";
// Config starter code
import { createChatBotMessage } from "react-chatbot-kit";
import Options  from "./Options";
import IconBotAvatar from "./IconBotAvatar";
import CustomChatMessage from "./CustomChatMessage";




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


    ],
    customComponents: {
        
        botAvatar: (props) => <IconBotAvatar  {...props} />,
        customChatMessage: (props) => <CustomChatMessage {...props} />,
        
}
};

export default config
