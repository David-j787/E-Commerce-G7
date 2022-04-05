// MessageParser starter code
class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
        if (lowerCaseMessage.includes("hi") || lowerCaseMessage.includes("hello")) {
             this.actionProvider.greet();
            }
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
    }
  }
  
  export default MessageParser;