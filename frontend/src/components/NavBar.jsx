import { Link } from "react-router-dom"
import { useSelector } from "react-redux";
import Dumbbell from "../assets/img/dumbbell.png";
const NavBar = ({ click }) => {

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => qty + Number(item.qty), 0)
    }

    return (
        <nav className="navbar flex space-between align-center">
            <Link to="/" className="navbar-logo flex">
                <h2>Sport Shopping</h2>
                <img src={Dumbbell} alt="dumbbell" />
            </Link>



            <ul className="navbar-links flex align-center clean-list">
                <li>
                    <Link to="/cart" className="cart-link">
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                            Cart
                            <span className="cart-logo-badge flex justify-center align-center text-center">{getCartCount()}</span>

                        </span>
                    </Link>

                </li>
                <li>
                    <Link to="/">
                        Shop
                    </Link>

                </li>
            </ul>

            <div className="hamburger-menu column space-between align-center" onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>

        </nav>
    )
}

export default NavBar
