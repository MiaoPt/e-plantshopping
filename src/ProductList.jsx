import React from 'react';
import logo from './logo.png';

import './App.css';
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";

function ProductList() {
    const products = useSelector((state) => state.products)
    return (
        <>
        <div className="navbar">
          <img src={logo} alt='logo' className='logo-img'></img>
          <div className='title'>
            <h1>Paradise Nursery</h1>
            <p>Where Green Meets Serenity</p>
          </div>
          
          <h2>Plants</h2>

          <div className='cart'>
            <FaShoppingCart className="cart-icon" />
            <span className="cart-number">0</span>
          </div>
        </div>

        <h3>Plants for Food</h3>

        <div className='products'>
        {products.map((product) => {
            return (
                <div key={product.id} className='product'>
                <img src={product.img} alt={product.name}></img>
                <h3>{product.name}</h3>
                <h3>£{product.cost}</h3>
                <button>Add to Cart</button>
            </div>            
            )
            })     
        }
        </ div>
        </>    
    )

};
export default ProductList;

