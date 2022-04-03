import React from "react";
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css';
import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from './ActionProvider';
import { Link } from "react-router-dom";
import chatIcon from "../../assets/images/chatIconOK.png";


export default function ChatBot (){
    return (
        <div className="chatIcon">
            <Link><img  src={chatIcon} alt=""  /></Link>
            <Chatbot  config={config} actionProvider={ActionProvider} messageParser={MessageParser} />

        
        </div>
    );
}