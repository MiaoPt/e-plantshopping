import '../App.css';
import { useDispatch, useSelector } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeItem } from '../store/cartSlice';
import Banner from './Banner'
import Checkout from './Checkout';

function CartList({goToCartParam, goToProductsParam, goToCheckoutParam}) {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    const totalCost = useSelector((state) => state.cart.totalCost)

    const increase = (item) => {
        dispatch(increaseQuantity(item));
    }
    const decrease = (item) => {
        dispatch(decreaseQuantity(item));
    }
    const deleteItem = (itemId) => {
        dispatch(removeItem(itemId));
    }
    
    return (
        <>
        <Banner goToCartParam={goToCartParam}/>
        <p className='cart-title'>Total Cart Amount: £{totalCost}</p>
        {cartItems.map((item) => (
            <div key={item.id} className='cart-items'> 
                    <div className='cart-single-item'>
                        <img src={item.img} className='cart-img'></img>
                        <div className='product-info'>
                            <p><strong>{item.name}</strong></p>
                            <p>£{item.cost * item.quantity}</p>
                            <div className="counter-container">
                                <button className="btn-minus" type="button" onClick={() => decrease(item)}>-</button>
                                <span className="counter-value">{item.quantity}</span>
                                <button className="btn-plus" type="button" onClick={() => increase(item)}>+</button>
                            </div>
                            <p>Total Cost: £{item.cost}</p>
                            <button className='delete-btn' onClick={() => deleteItem(item.id)}>Delete</button>
                        </div>
                    </div>
            </div>
               
        ))}
        <div className='btn-container'>
            <button className='btn' onClick={() => goToProductsParam()}>Continue shopping</button>
            <button className='btn' onClick={() => goToCheckoutParam()}>Checkout</button>
        </div>
       
        </>
    );
}

export default CartList;