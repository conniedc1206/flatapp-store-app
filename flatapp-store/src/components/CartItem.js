import React from "react";
import { Flex, Box, Image, Button, Heading } from "@chakra-ui/react"

function CartItem({ app, handleRemoveFromCart }) {
  const handleRemoveClick = () => {
    handleRemoveFromCart(app);
  };

  return (
    <Box textAlign="center"
    margin="2%"
    marginTop="3%"
    border="2px solid lightgrey"
    borderRadius="10%"
    padding="1%"
    width="500px"
    _hover={{
      border: "2px solid black",
      boxShadow: "dark-lg",
      transition: ".5s"
    }}
    >
      <Heading size="md" textDecoration="underline">{app.appName}</Heading>
      <Flex justifyContent="center"
      marginTop=".5%">
        <Image alt="app image" src={app.image} width="400px"/>
      </Flex>
      <br></br>
      <Button 
      onClick={handleRemoveClick}
      colorScheme="twitter" >Remove from cart</Button>
    </Box>
  );
}

export default CartItem;
