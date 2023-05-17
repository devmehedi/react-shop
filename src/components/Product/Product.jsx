/* eslint-disable react/prop-types */
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
  const { img, name, seller, price, ratings } = props.product;
  const handleAddToCart = props.handleAddToCart;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h6>{name}</h6>
        <h5>${price}</h5>
        <p>Manufacturer: {seller}</p>
        <p>Rating: {ratings} Star</p>
      </div>
      <button
        onClick={() => handleAddToCart(props.product)}
        className="cart-btn"
      >
        Add To Cart
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
