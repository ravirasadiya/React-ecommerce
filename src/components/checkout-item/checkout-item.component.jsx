import React from 'react';
import { connect } from 'react-redux';
import {
  addItem,
  clearItemFromCart,
  removeItem,
} from '../../reducer/cart/cart.action';
import './checkout-item.style.scss';

const CheckoutItem = ({ cartItem, clearItemFromCart, addItem, removeItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img alt='img' src={imageUrl} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <span
        className='remove-button'
        onClick={() => clearItemFromCart(cartItem)}
      >
        &#10005;
      </span>
    </div>
  );
};

const mapStateToDispatch = (dispatch) => ({
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapStateToDispatch)(CheckoutItem);
