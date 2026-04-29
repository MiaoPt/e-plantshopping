import '../App.css';
import { useDispatch, useSelector } from "react-redux";
import { increaseQuantity, decreaseQuantity, deleteItem } from '../store/cartSlice';
import Banner from './Banner'

function CartList({goToCartParam}) {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    const totalCost = useSelector((state) => state.cart.totalCost)

    const increase = (item) => {
        dispatch(increaseQuantity(item));
    }
    const decrease = (item) => {
        dispatch(decreaseQuantity(item));
    }
    const removeItem = (itemId) => {
        dispatch(deleteItem(itemId));
    }
    
    return (
        <>
        <Banner goToCartParam={goToCartParam}/>
        <p className='cart-title'>Total Cart Amount: £{totalCost}</p>
        {cartItems.map((item) => (
            <div className='cart-items'> 
                    <div key={item.id} className='cart-single-item'>
                        <img src={item.img} className='cart-img'></img>
                        <div className='product-info'>
                            <p><strong>{item.name}</strong></p>
                            <p>£{item.cost}</p>
                            <div className="counter-container">
                                <button className="btn-minus" type="button" onClick={() => decrease(item)}>-</button>
                                <span className="counter- value">{item.quantity}</span>
                                <button className="btn-plus" type="button" onClick={() => increase(item)}>+</button>
                            </div>
                            <p>Total Cost: £{item.cost}</p>
                            <button className='delete-btn' onClick={() => removeItem(item.id)}>Delete</button>
                        </div>
                    </div>
            </div>
               
        ))}
        <div className='btn-container'>
            <button className='btn'>Continue shopping</button>
            <button className='btn'>Checkout</button>
        </div>
       
        </>
    );
}

export default CartList;