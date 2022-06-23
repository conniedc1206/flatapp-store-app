import React from "react";

function CartItem({ app, handleRemoveFromCart }) {
  const handleRemoveClick = () => {
    handleRemoveFromCart(app);
  };

  return (
    <div>
      <img alt="app image" src={app.image} style={{ width: "25%" }} />
      {app.appName}
      <br></br>
      <button onClick={handleRemoveClick}> X </button>
    </div>
  );
}

export default CartItem;
