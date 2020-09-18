import React from 'react';
import CollectionPreview from '../../components/collectionPreview/collectionPreview.component';
import { createStructuredSelector } from 'reselect';
import { selectShopData } from '../../reducer/shop/shop.selector';
import { connect } from 'react-redux';

const ShopPage = ({ collections }) => {
  return (
    <div className='shop-age'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopData,
});

export default connect(mapStateToProps)(ShopPage);
