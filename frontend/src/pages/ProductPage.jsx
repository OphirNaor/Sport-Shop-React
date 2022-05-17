import { useState, useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { getProductDetails } from '../redux/actions/productActions'
import { addToCart } from '../redux/actions/cartActions'


const ProductPage = ({ match, history }) => {
    const [ qty, setQty ] = useState(1);
    const dispatch = useDispatch();

    const productDetails = useSelector((state) => state.getProductDetails);
    const { loading, error, product } = productDetails;


    useEffect(() => {
        
        if (product && match.params.id !== product._id) {
            dispatch(getProductDetails(match.params.id));

            
        }
        
    }, [dispatch, match, product]);

    const addToCartHandler = () => {
        dispatch(addToCart(product._id, qty));
        history.push('/cart');
    }


    return (
        <section className="product-page container flex">
            {loading ? (
                <h2 className="page-loading-screen">Loading...</h2>
                 ) : error ?(
                    <h2>{error}</h2>
                  ) : (
                      <>
              <div className="productpage-left flex">
                <div className="left-image">
                    <img src={product.imageUrl} alt={product.name} />
                </div>
                <div className="left-info">
                    <p className="left-name">{product.name}</p>
                    
                    <p>Price: ${product.price}</p>
                    <p>{product.description}</p>
                </div>
            </div>
            <div className="productpage-right">
                <div className="right-info">
                    <p>
                        Price:  <span>${product.price}</span>
                    </p>

                    <p>
                        Status: <span>{product.countInStock > 0 ? "In Stock" : "Out of Stock" }</span>
                    </p>

                    <p>
                        Quantity:
                        <select value={qty} onChange = {(e)  => setQty(e.target.value)}>
                        {[...Array(product.countInStock).keys()].map((x) => (
                            <option key={x+1} value={x+1}>
                                {x+1}
                                </option>
                        ))}
                        </select>
                    </p>

                    <p>
                        <button type="button" onClick={addToCartHandler}>
                            Add to cart</button>
                    </p>

                </div>

            </div>
            </>
                  )}
          
        </section>
    );
};

export default ProductPage