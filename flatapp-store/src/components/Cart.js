import React from "react";
import CartItem from "./CartItem";

function Cart({ cartApps, handleRemoveFromCart}) {
  console.log(cartApps);

  const renderCartItems = cartApps.map((app) => (
    <CartItem
      key={app.id}
      app={app}
      handleRemoveFromCart={handleRemoveFromCart}
    />
  ));

  return <div>{renderCartItems}</div>;
}

export default Cart;
