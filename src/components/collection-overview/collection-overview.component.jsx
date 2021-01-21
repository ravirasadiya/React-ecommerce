import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopData } from '../../reducer/shop/shop.selector';
import CollectionPreview from '../collectionPreview/collectionPreview.component';

import './collection-overview.style.scss';

const CollectionOverView = ({ collections }) => (
  <div className='collection-overview'>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopData,
});

export default connect(mapStateToProps)(CollectionOverView);
