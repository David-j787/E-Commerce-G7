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
      const message = this.createChatBotMessage(
        "To register in our site, check the navigation bar just on the top and visit Sign Up, it will redirect you to register form, complete and send it to create your account", {
        widget: "register",
        delay: 1000,
        });
      this.addMessageToState(message);
    };

  buyProduct = () => {
      const message = this.createChatBotMessage(
        "To buy a product, visit our shop and select the product you want, then add to the cart, it will open your shop cart, later proceed to checkout", {
        widget: "products",
        delay: 1000,
        });
      this.addMessageToState(message);
    };

  showOrders = () => {
      const message = this.createChatBotMessage(
        "To able to see your orders, please first verify you are logged, later go to you account profile and click My Orders option.", {
        widget: "ordersBot",
        delay: 1000,
        });
      this.addMessageToState(message);
    };

  payments = () => {
    const message = this.createChatBotMessage(
      "You can pay your orders with cash, credit or debit cards of VISA, MasterCard or American Express using Mercado Pago platform.", {
      widget: "payments",
      delay: 1000,
      });
    this.addMessageToState(message);
  };

  viewProfile = () => {
    const message = this.createChatBotMessage(
      "You must be logged to see your profile, you can find the link clicking on your avatar on the right top of the site.", {
      widget: "profile",
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