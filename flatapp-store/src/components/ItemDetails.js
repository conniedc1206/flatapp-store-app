import React, { useState } from "react";
import {
  Box,
  Flex,
  Button,
  Image,
  Heading,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import { FaRegThumbsUp } from "react-icons/fa";
import { BsCartPlus } from "react-icons/bs";
import { TiArrowBack } from "react-icons/ti";

function ItemDetails({ selectedApp, handleAddToCart, apps, setApps }) {
  // states for disabling buttons
  const [liked, setLiked] = useState(false);
  const [clickedCart, setClickedCart] = useState(false);

  const addToCart = () => {
    handleAddToCart(selectedApp);
    setClickedCart((currentClickedCart) => !currentClickedCart);
  };

  const handleLikeClick = () => {
    setLiked((currentLike) => !currentLike);
    fetch(`http://localhost:3000/apps/${selectedApp.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likes: selectedApp.likes + 1 }),
    });
  };

  console.log(apps);
  console.log(selectedApp)

  return (
    <Box display="flex" justifyContent="center" textAlign="center">
      <Box key={selectedApp.id} marginTop="1%">
        <Heading textDecoration="underline" marginBottom=".5%">
          {selectedApp.appName}
        </Heading>
        <p>Developers: {selectedApp.developerNames}</p>
        <Flex justifyContent="center" marginTop=".5%">
          <Image
            alt={selectedApp.appName}
            src={
              selectedApp.image
                ? selectedApp.image
                : "https://coursereport-production.imgix.net/uploads/school/logo/8/original/flatironschool.png?w=200&h=200"
            }
            style={{ width: "50%" }}
          />
        </Flex>
        <Flex justifyContent="center">
          <Box textAlign="center" maxWidth="600px">
            <p>About: {selectedApp.about}</p>
            <Link
              textDecoration="underline"
              color="blue"
              href={selectedApp.githubRepo}
              target="_blank"
              rel="noreferrer noopener"
            >
              Github Repo
            </Link>
            <br></br>
            <Link
              textDecoration="underline"
              color="blue"
              href={selectedApp.appUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              Live Demo
            </Link>
          </Box>
        </Flex>
        <Flex justifyContent="center" marginTop=".5%" marginBottom="10%">
          <ReactLink to="/">
            <Button colorScheme="twitter">
              <TiArrowBack />
            </Button>
          </ReactLink>
          <Popover>
            <PopoverTrigger>
              <Button
                marginLeft="2%"
                marginRight="2%"
                colorScheme="twitter"
                onClick={addToCart}
                disabled={clickedCart}
              >
                <BsCartPlus />
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Added to cart!</PopoverHeader>
              <PopoverBody>If you haven't already, leave a like!</PopoverBody>
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger>
              <Button
                colorScheme="twitter"
                onClick={handleLikeClick}
                disabled={liked}
              >
                <FaRegThumbsUp />
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Liked!</PopoverHeader>
              <PopoverBody>Consider adding this app to your cart</PopoverBody>
            </PopoverContent>
          </Popover>
        </Flex>
      </Box>
    </Box>
  );
}

export default ItemDetails;
