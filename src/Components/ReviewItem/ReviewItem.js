import React from 'react';

const ReviewItem = (props) => {
    const { img, name, price,quantity,key } = props.pd;
    return (
        <div style={{borderRight:"1px solid lightgray",borderBottom:"1px solid gray" ,padding:"10px"}}>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <h5>$ {price}</h5>
            <h3>select-product {quantity}</h3>
            <button className='product-button' onClick={()=> props.removeproductButton (key) } >Remove</button>

        </div>
    );
};

export default ReviewItem;