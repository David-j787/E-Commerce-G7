// MessageParser starter code
class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      console.log(message)
      const lowerCaseMessage = message.toLowerCase();
        if (lowerCaseMessage.includes("hi") || lowerCaseMessage.includes("hello")) return(this.actionProvider.greet());
        if (lowerCaseMessage.includes("hola")) return (this.actionProvider.saludo());
        if (lowerCaseMessage.includes("register")) return (this.actionProvider.register());
        if (lowerCaseMessage.includes("registro")) return (this.actionProvider.registro());
        if (lowerCaseMessage.includes("registrarme")) return (this.actionProvider.registro());
        if (lowerCaseMessage.includes("buy")) return (this.actionProvider.buyProduct());
        if (lowerCaseMessage.includes("comprar")) return (this.actionProvider.comprarProducto());
        if (lowerCaseMessage.includes("orders")) return (this.actionProvider.showOrders());
        if (lowerCaseMessage.includes("producto")) return (this.actionProvider.comprarProducto());
        if (lowerCaseMessage.includes("productos")) return (this.actionProvider.comprarProducto());
        if (lowerCaseMessage.includes("help")) return( message=this.actionProvider.createChatBotMessage("How can I help you?", {
            withAvatar: true,
            widget: "options",
            delay: 1000,
            }
            
            )
            
            );
        
     if (lowerCaseMessage.includes("Help")) return( message=this.actionProvider.createChatBotMessage("How can I help you?", {
        withAvatar: true,
        widget: "options",
        delay: 1000,
        }));/* 
 if (lowerCaseMessage.includes("help me")) {
    message=this.actionProvider.createChatBotMessage("How can I help you?");
    this.actionProvider.addMessageToState(message);
}
 if (lowerCaseMessage.includes("Help me")) {
    message=this.actionProvider.createChatBotMessage("How can I help you?");
    this.actionProvider.addMessageToState(message);
}
 if (lowerCaseMessage.includes("ayuda")) {
    message=this.actionProvider.createChatBotMessage("Como puedo ayudarte?",{
        withAvatar: true,
    widget: "optionsES",
    delay: 1000,
});
    this.actionProvider.addMessageToState(message);
}
 if (lowerCaseMessage.includes("Ayuda")) {
    message=this.actionProvider.createChatBotMessage("Como puedo ayudarte?");
    this.actionProvider.addMessageToState(message);
    
}
 if (lowerCaseMessage.includes("ayudame")) {
    message=this.actionProvider.createChatBotMessage("Como puedo ayudarte?");
    this.actionProvider.addMessageToState(message);

} */
else {
    message=this.actionProvider.createChatBotMessage("Disculpa , no entiendo,puedes reformular la pregunta o seleccionar una de las opciones",{
        withAvatar: true,
    widget: "optionsES",
    delay: 1000,
});
    this.actionProvider.addMessageToState(message);
}

    }
    }
  
  export default MessageParser;