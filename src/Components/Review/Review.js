import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { deleteFromDb, getStoredCart } from '../../utilities/fakedb';
import fakeData from '../../fakeData/products.json';
import ReviewItem from '../ReviewItem/ReviewItem';


const Review = () => {
    const [cart, setCart] = useState([]);
    const removeproductButton = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        deleteFromDb(productKey);
    }

    useEffect(() => {
        const saveCart = getStoredCart();
        const productKey = Object.keys(saveCart);
        const cartProduct = productKey.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = saveCart[key];
            return product;
        })
        setCart(cartProduct);

    }, []);
    const { img } = cart;
    return (
        <div className='shop-product'>
            {
                cart.map(pd => <ReviewItem key={pd.key} pd={pd} removeproductButton={removeproductButton} ></ReviewItem>)
            }
        </div>
    );
};

export default Review;