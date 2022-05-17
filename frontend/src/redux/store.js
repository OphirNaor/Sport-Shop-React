import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { cartReducer } from "./reducers/cartReducers";
import { getProductsReducer, getProductDetailsReducer } from "./reducers/productReducers"
const reducer = combineReducers({
    cart: cartReducer,
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer


})

const middleware = [thunk];

const CartFromLocalStorage = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []

const INITAL_STATE = {
    cart: {
        cartItems: CartFromLocalStorage
    }
}

const store = createStore(
    reducer,
    INITAL_STATE,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;