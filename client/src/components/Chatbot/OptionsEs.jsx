import React from 'react';

const OptionsES = (props) => {
    const options= [
        {text:'Quiero registrarme.',
        handler:props.actionProvider.registro,id:1},
        {text:'Quiero comprar un producto.',
        handler:props.actionProvider.comprarProducto,
         id:2},
        {text:'Quiero ver mis Compras.',
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
export default OptionsES;