import React, { useState } from 'react';
import fakeData from '../../fakeData/products.json';
import { addToDb } from '../../utilities/fakedb';
import Card from '../Card/Card';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const fakeData10 = fakeData;
    const [cart , setCart]=useState([]);


    const hendelAllProduct = (props)=>{
        const newCart = [...cart ,props];
        setCart(newCart);
        addToDb(props.key);


    }

    return (
        <div className='shop-container'>
            <div className="shop-product">                
                {
                   
                    fakeData10.map(product => <Product key={product.key} showAddToCart={true} hendelAllProduct={hendelAllProduct} Product={product}></Product>)
                }
            </div>
            <div className="shop-order">
                <Card cart={cart}></Card>

            </div>


        </div>
    );
};

export default Shop;