// MessageParser starter code
class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
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
        }));


    
        else if (lowerCaseMessage.includes("help")) {
            return this.actionProvider.createChatBotMessage("Hi, how can I help you?");
            }
        else if (lowerCaseMessage.includes("thanks")) {
            return this.actionProvider.createChatBotMessage("You're welcome!");
            }
        else if (lowerCaseMessage.includes("bye")) {
            return this.actionProvider.createChatBotMessage("Goodbye!");
            }
        else if (lowerCaseMessage.includes("chau")) {
            return this.actionProvider.createChatBotMessage("Goodbye!");
            }
        else if (lowerCaseMessage.includes("goodbye")) {
            return this.actionProvider.createChatBotMessage("Goodbye!");
            }
        else if (lowerCaseMessage.includes("thank you")) {
            return this.actionProvider.createChatBotMessage("You're welcome!");
            }
        else if (lowerCaseMessage.includes("i'm sorry")) {
            return this.actionProvider.createChatBotMessage("It's alright, never mind!");
            }
        else if (lowerCaseMessage.includes("register")) {
            return this.actionProvider.register();
            }
        else if (lowerCaseMessage.includes("buy")) {
            return this.actionProvider.buyProduct();
            }
        else if (lowerCaseMessage.includes("shop")) {
            return this.actionProvider.buyProduct();
            }
        else if (lowerCaseMessage.includes("product")) {
            return this.actionProvider.buyProduct();
            }
        else if (lowerCaseMessage.includes("products")) {
            return this.actionProvider.buyProduct();
            }
        else if (lowerCaseMessage.includes("profile")) {
            return this.actionProvider.viewProfile();
            }
        else if (lowerCaseMessage.includes("payments")) {
            return this.actionProvider.payments();
            }
        else if (lowerCaseMessage.includes("pay")) {
            return this.actionProvider.payments();
            }
        else if (lowerCaseMessage.includes("credit cards")) {
            return this.actionProvider.payments();
            }
        else if (lowerCaseMessage.includes("cash")) {
            return this.actionProvider.payments();
            }
        else if (lowerCaseMessage.includes("card")) {
            return this.actionProvider.payments();
            }
        else if (lowerCaseMessage.includes("chao")) {
            return this.actionProvider.createChatBotMessage("Goodbye!");
            }
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