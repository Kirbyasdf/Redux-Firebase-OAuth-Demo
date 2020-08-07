export const addItemToCart = (cartItems, addedItem) => {
  const exisitingCartItem = cartItems.find((cartItem) => cartItem.id === addedItem.id);
  if (exisitingCartItem) {
    return cartItems.map((cartItem) => {
      return cartItem.id === addedItem.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem;
    });
  }

  return [...cartItems, { ...addedItem, quantity: 1 }];
};
