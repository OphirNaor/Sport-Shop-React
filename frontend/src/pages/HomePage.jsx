import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "../components/Product"
import { getProducts as listProducts } from "../redux/actions/productActions";
import HeroCmp from "../components/HeroCmp";


const HomePage = () => {
    const dispatch = useDispatch();
    const getProducts = useSelector((state) => state.getProducts);
    const { products, loading, error } = getProducts;
    const [searchTerm, setSearchTerm] = useState("All")

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <>
            <HeroCmp height="80vh" path="https://images.pexels.com/photos/949126/pexels-photo-949126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" description="User-friendly description of image for accessiblity" />
            <div className="search">
                <input type="text" placeholder="Search" onChange={(event) => {
                    setSearchTerm(event.target.value);
                }} />

            </div>
            <section className="home-page container">
                <h2 className="homepage-title">Latest Products</h2>

                <div className="homepage-products">
                    {loading ? (
                        <h2 className="page-loading-screen">Loading...</h2>
                    ) : error ? (
                        <h2>{error}</h2>
                    ) : (
                        products.filter((val) => {
                            if (searchTerm == "") {
                                return val;
                            } else {

                                return (val.name.toLowerCase().includes(searchTerm.toLowerCase()))
                            }
                        }).map((product) => (
                            <Product
                                key={product._id}
                                productId={product._id}
                                name={product.name}
                                price={product.price}
                                description={product.description}
                                imageUrl={product.imageUrl}
                            />
                        ))

                    )}

                </div>
            </section>

        </>
    )
}

export default HomePage