import React from 'react';

const Options = (props) => {
    const options= [
        {text:'I want to register.',
        handler:props.actionProvider.register,id:1},
        {text:'I want to buy a product.',
        handler:props.actionProvider.buyProduct,
         id:2},
        {text:'I want to see my orders.',
        handler:props.actionProvider.showOrders,id:3},
      

    ]
    const buttonsMarkUp = options.map(option => (
            <button className="option-button" key={option.id} onClick={option.handler}>{option.text}</button>
        
    ))
    return (
        <div className="options-container">
            {buttonsMarkUp}
        </div>
    )
}
export default Options;