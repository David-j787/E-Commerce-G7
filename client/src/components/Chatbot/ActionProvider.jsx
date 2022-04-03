// ActionProvider starter code
class ActionProvider {
    constructor(
     createChatBotMessage,
     setStateFunc,
     createClientMessage,
     stateRef,
     createCustomMessage,
     ...rest
   ) {
     this.createChatBotMessage = createChatBotMessage;
     this.setState = setStateFunc;
     this.createClientMessage = createClientMessage;
     this.stateRef = stateRef;
     this.createCustomMessage = createCustomMessage;
   }
greet = () => {
    const message = this.createChatBotMessage("Hi, how can I help you?", {
      widget: "options",
      delay: 1000,
      });
    this.addMessageToState(message);
    };

register = () => {
    const message = this.createChatBotMessage("You can register here", {
      widget: "register",
      delay: 1000,
      });
    this.addMessageToState(message);
    };

    buyProduct = () => {
        const message = this.createChatBotMessage("You can buy a product here", {
          widget: "products",
          delay: 1000,
          });
        this.addMessageToState(message);
        };



  addMessageToState = (message) => {
    this.setState((prevState) => ({
        ...prevState,
      messages: [...prevState.messages, message],
    }));
  }


 }
 
 export default ActionProvider;