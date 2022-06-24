import React from "react";
import CartItem from "./CartItem";
import { Box, Flex } from "@chakra-ui/react"


function Cart({ cartApps, handleRemoveFromCart}) {
  console.log(cartApps);

  const renderCartItems = cartApps.map((app) => (
    <CartItem
      key={app.id}
      app={app}
      handleRemoveFromCart={handleRemoveFromCart}
    />
  ));

  return (
      <Flex alignItems="center" flexDirection="column">{renderCartItems}</Flex>
  )
}

export default Cart;
