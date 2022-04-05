import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css';
import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from './ActionProvider';
import chatIcon from "../../assets/images/chatIconOK.png";



export default function ChatBot (Lang="es") {
   
   
    const [show, setShow] = useState(false);
    if(Lang === "es"){

    return (   
        
 
        <div className="chatIcon">
            <span onClick={e => setShow(!show)}><img src={chatIcon} alt="chat bot" /></span>
            {show && <Chatbot placeholderText = "Escribe aquí tu mensaje..." config={config} actionProvider={ActionProvider} messageParser={MessageParser} />}
        </div>
    );
}
else{
    return (
        <div className="chatIcon">
        <span onClick={e => setShow(!show)}><img src={chatIcon} alt="chat bot" /></span>
        {show && <Chatbot placeholderText = "Escribe aquí tu mensaje..." config={config} actionProvider={ActionProvider} messageParser={MessageParser} />}
    </div>
    );

}
}
