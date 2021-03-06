import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const SideDrawer = ({ show, click }) => {
    const sideDrawerClass = ["sidedrawer"];

    if (show) {
        sideDrawerClass.push("show")
    }

    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;

    const getCartCount = () => {
    return cartItems.reduce((qty, item)=> qty + Number(item.qty), 0)
}

    return (
        <section className={sideDrawerClass.join(" ")}>
            <ul className="sidedrawer-links flex column clean-list" onClick={click}>
                <li>
                    <Link to="/cart">
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                            Cart <span className="sidedrawer-cartbadge flex align-center justify-center text-center">{getCartCount()}</span>
                        </span>
                    </Link>

                </li>

                <li>
                    <Link to="/">
                        Shop
                    </Link>
                </li>

            </ul>

        </section>
    );

}

export default SideDrawer