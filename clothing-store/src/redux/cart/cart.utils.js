export const addItemToCart = (cartItems, addedItem) => {
  const exisitingCartItem = cartItems.find((cartItem) => cartItem.id === addedItem.id);
  if (exisitingCartItem) {
    return cartItems.map((cartItem) => {
      return cartItem.id === addedItem.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem;
    });
  }

  return [...cartItems, { ...addedItem, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, removedItem) => {
  const exisitingCartItem = cartItems.find((cartItem) => cartItem.id === removedItem.id);

  if (exisitingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== removedItem.id);
  }

  return cartItems.map((ci) => (ci.id === removedItem.id ? { ...ci, quantity: ci.quantity - 1 } : ci));
};
