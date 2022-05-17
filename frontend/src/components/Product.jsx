import { Link } from "react-router-dom"

const Product = ({ imageUrl, name, price, description, productId }) => {
    return (
        <section className="product flex column space-between">
            <img src={imageUrl} alt={name} />

            <div className="product-info">
                <p className="info-name">{name}</p>
                <p className="info-description">{description.substring(0, 100)}...</p>
                <p className="info-price">${price}</p>

                <Link to={`/product/${productId}`} className="info-button">
                    View

                </Link>
            </div>

        </section>
    )
}

export default Product