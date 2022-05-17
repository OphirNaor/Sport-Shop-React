import CartItem from "../components/CartItem"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../redux/actions/cartActions";

const CartPage = () => {
const dispatch = useDispatch();
const cart = useSelector(state => state.cart);
const {cartItems} = cart;

const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty))
}

const removeHandler = (id) => {
    dispatch(removeFromCart(id))
}

const getCartCount = () => {
    return cartItems.reduce((qty, item)=> Number(item.qty) + qty, 0)
}

const getCartSubTotal = () => {
    return cartItems.reduce((price, item) => (item.price * item.qty) + price, 0)
}
    return (
        <section className="cart-page flex">
            <div className="cartpage-left">
                <h2>Shopping Cart</h2>
                {cartItems.length === 0 ? (
                    <div>
                        Your cart is empty <Link className="active" to="/">GO Back</Link>
                    </div>
                ) : cartItems.map(item => (
                    <CartItem key={item.product} item={item} qtyChangeHandler={qtyChangeHandler} removeHandler={removeHandler}/>
                ))}
              
            </div>
            <div className="cartpage-right">
                <div className="cartpage-info">
                    <p>Subtotal ({getCartCount()}) items</p>
                    <p>${getCartSubTotal().toFixed(2)}</p>
                </div>
                <div>
                    <button>Proceed to Checkout</button>
                </div>
            </div>
        </section>
    )
}

export default CartPage