import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectShopData = createSelector(
  [selectShop],
  (selectShop) => selectShop.shopData
);

export const selectCollection = (collectionURLParams) =>
  createSelector(
    [selectShopData],
    (selectShop) => selectShop[collectionURLParams]
  );
