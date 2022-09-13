import React from 'react';

const Card = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total,prod) => total + prod.price, 0);
    const productPrice = totalPrice;
    const totalTax = Math.round(totalPrice/10);
    let shipingCost = 0;
    if(totalPrice>100){
        shipingCost=20;
    }
    else if(totalPrice>10){
        shipingCost=10;

    }
    else if(totalPrice>0){
        shipingCost=5;

    }
    const beforTax = totalPrice+shipingCost;
    const fbeforTax = beforTax.toFixed(2);


    const totaOrders = beforTax+totalTax;
    const ftotalOrders = totaOrders.toFixed(2);
    const Amount =productPrice.toFixed(2);
    return (
        <div>
            <h3>Order Summary </h3>
                <p>Items ordered:{cart.length}</p>
                <div>
                    <p>Items: ${Amount}</p>
                    <p>Shipping $ Handling:${shipingCost}</p>
                    <p>Total before tax:{fbeforTax}</p>
                    <p>Estimated Tax:{totalTax}</p>
                    <h4>Order Total:${ftotalOrders}</h4>
                </div>
        </div>
    );
};

export default Card;