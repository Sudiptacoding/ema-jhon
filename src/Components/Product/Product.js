import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = (props) => {
    const { name, img, seller, price, stock, features, key } = props.Product;
    return (
        <div className='product-container'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='product-details'>
                <p className='product-name'><Link to={"/product/" + key}>{name}</Link></p>
                <p className='product-seller'>by: {seller}</p>
                <p className='product-price'>${price}</p>
                <div style={{ display: 'flex' }}>
                    <div>
                        <p className='product-stock'>only {stock} left in stock - order soon</p>
                        {props.showAddToCart && <button onClick={() => props.hendelAllProduct(props.Product)} className='product-button'><span><i class="fa-solid fa-cart-shopping"></i></span> add to cart</button>}

                    </div>
                    <div style={{ marginLeft: '22%', marginTop: '-65px', marginBottom: '10px' }}>
                        <span className='product-icon'><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></span>
                        <span>
                            <span><h5>Features</h5></span>

                            {
                                features.map(dis => <li>{dis.description} {dis.value}</li>)
                            }
                        </span>
                    </div>

                </div>


            </div>
        </div>

    )
};

export default Product;