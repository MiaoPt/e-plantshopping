import React from 'react';
import logo from '../logo.png';

import '../App.css';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { addItem } from '../store/cartSlice';
import Banner from './Banner.jsx'

function ProductList({goToCartParam}) {
    const products = useSelector((state) => state.products);
    const foodProducts = products.filter((product) => product.category === 'food');
    const herbProducts = products.filter((product) => product.category === 'herb');
    const treeProducts = products.filter((product) => product.category === 'tree');
    const dispatch = useDispatch();
    const totalQuantity = useSelector((state) => state.cart.totalQuantity)
    const cartItems = useSelector((state) => state.cart.items)
    //const foodPlants = useSelector((state) => state.products)
    const handleAddToCart = (product) => {
      dispatch(addItem(product));

    }
    return (
        <>
        <Banner goToCartParam={goToCartParam}/>
        <h3>Plants for Food</h3>

        <div className='products'>

        {foodProducts.map((product) => {
          const isInCart = cartItems.some((item) => item.id === product.id)

            return (
                
              <div key={product.id} className='product'>
                  <h3>{product.name}</h3>
                  <img src={product.img} alt={product.name}></img>
                  <h3>£{product.cost}</h3>
                  <button onClick={() => handleAddToCart(product)} disabled={isInCart}>{isInCart ? 'Added' : 'Add to Cart'}</button>
              </div>            
            )
        })     
        }
        </ div>
        
        <h3>Herbs</h3>
        <div className='products'>
         {herbProducts.map((product) => {
          const isInCart = cartItems.some((item) => item.id === product.id)

            return (
                
              <div key={product.id} className='product'>
                  <h3>{product.name}</h3>
                  <img src={product.img} alt={product.name}></img>
                  <h3>£{product.cost}</h3>
                  <button onClick={() => handleAddToCart(product)} disabled={isInCart}>{isInCart ? 'Added' : 'Add to Cart'}</button>
              </div>            
            )
        })     
        }
        </div>

        <h3>Trees</h3>
        <div className='products'>
         {treeProducts.map((product) => {
          const isInCart = cartItems.some((item) => item.id === product.id)

            return (
                
              <div key={product.id} className='product'>
                  <h3>{product.name}</h3>
                  <img src={product.img} alt={product.name}></img>
                  <h3>£{product.cost}</h3>
                  <button onClick={() => handleAddToCart(product)} disabled={isInCart}>{isInCart ? 'Added' : 'Add to Cart'}</button>
              </div>            
            )
        })     
        }
        </div>

        </>    
    )

};
export default ProductList;

