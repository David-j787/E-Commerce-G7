import React from "react";
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css';
import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from './ActionProvider';


export default function ChatBot (){
    return (
        <Chatbot  config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
        
    );
}