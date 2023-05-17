/* eslint-disable react/prop-types */
import "./Product.css";

const Product = ({ product }) => {
  const { img, name, seller, price, ratings } = product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h6>{name}</h6>
        <h5>${price}</h5>
        <p>Manufacturer: {seller}</p>
        <p>Rating: {ratings} Star</p>
      </div>
      <button className="cart-btn">Add To Cart</button>
    </div>
  );
};

export default Product;
