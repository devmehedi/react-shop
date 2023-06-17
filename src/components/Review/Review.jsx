import React from "react";
import "./Review.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Review = ({ product, handleRemoveFromCart }) => {
  const {id, img, name, price, shipping } = product;
  return (
    <div className="review-item">
      <div className="items-details">
            <img  className="review-img" src={img} alt="" />
        <div className="items-description">
            <h5>{name}</h5>
            <p>Price: <span>${price}</span></p>
            <p>Shipping charge: <span>${shipping}</span></p>
        </div>
      </div>
      <div>
        <button onClick={()=>handleRemoveFromCart(id)} className="delete-btn">
        <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </div>
    </div>
  );
};

export default Review;
