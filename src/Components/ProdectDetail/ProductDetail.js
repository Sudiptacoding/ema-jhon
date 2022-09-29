import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData/products.json'
import Product from '../Product/Product';

const ProductDetail = () => {
    const{productkey} = useParams();
    const product = fakeData.find( pd => pd.key === productkey);
    console.log(product);
   return (

      
        <div>
            <h1>Product Detail </h1>
            <Product showAddToCart ={false} Product={product}></Product>

        </div>
    );
};

export default ProductDetail;