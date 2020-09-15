export const addItemToCart = (cartItems, cartItemToadd) => {
  const exitsitngItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToadd.id
  );

  if (exitsitngItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToadd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToadd, quantity: 1 }];
};

export const removeItemToCart = (cartItems, cartItemToremove) => {
  const exitsitngItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToremove.id
  );

  if (exitsitngItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToremove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToremove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
