import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import './collectionItem.style.scss';
import { addItem } from '../../reducer/cart/cart.action';

const CollectionItem = ({ item, addItem }) => {
  const { id, name, price, imageUrl } = item;
  return (
    <div className='collection-item' key={id}>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        {' '}
        Add to Cart
      </CustomButton>
    </div>
  );
};

const mapPropsToDispatch = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapPropsToDispatch)(CollectionItem);
