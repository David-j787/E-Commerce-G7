import React from "react";
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css';
import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from './ActionProvider';
import { Link } from "react-router-dom";
import chatIcon from "../../assets/images/chatIconOK.png";



export default function ChatBot (Lang="es") {
   
   
    if(Lang === "es"){
    return (
        <div className="chatIcon">
            <Link><img  src={chatIcon} alt=""  /></Link>
            <Chatbot placeholderText = "Escribe aquí tu mensaje..." config={config} actionProvider={ActionProvider} messageParser={MessageParser} />

        
        </div>
    );
}
else{
    return (
        <div className="chatIcon">
            <Link><img  src={chatIcon} alt=""  /></Link>
            <Chatbot placeholderText = "Write your message here..." config={config} actionProvider={ActionProvider} messageParser={MessageParser} />

        
        </div>
    );

}
}
