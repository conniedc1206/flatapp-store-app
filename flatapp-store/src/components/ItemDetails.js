import React from "react";

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

function ItemDetails({ selectedApp, handleAddToCart }) {
  // const { id } = useParams();

  //console.log(selectedApp);

  const addToCart = () => {
    handleAddToCart(selectedApp);
  };


  return (
    <Box 
    display="flex"
    justifyContent="center"
    textAlign="center" >
      <Box 
      key={selectedApp.id} 
      marginTop="1%" >
        <Heading 
        textDecoration="underline"
        marginBottom=".5%" >{selectedApp.appName}</Heading>
        <p>Developers: {selectedApp.developerNames}</p>
        <Flex
        justifyContent="center"
        marginTop=".5%" >
          <Image
            alt={selectedApp.appName}
            src={selectedApp.image}
            style={{ width: "50%" }}
          />
        </Flex>
        <Flex
        justifyContent="center" >
          <Box 
          textAlign="center"
          maxWidth="600px" >
            <p>About: {selectedApp.about}</p>
            <Link textDecoration="underline" color="blue" href={selectedApp.githubRepo}>Github Repo</Link>
            <br></br>
            <Link textDecoration="underline" color="blue" href={selectedApp.appUrl}>Live Demo</Link>
          </Box>
        </Flex>
        <Flex justifyContent="center" 
        marginTop=".5%" 
        marginBottom="10%" >
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
              onClick={addToCart} >
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
              <Button colorScheme="twitter">
                <FaRegThumbsUp />
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Liked!</PopoverHeader>
              <PopoverBody>Consider adding this content to your cart</PopoverBody>
            </PopoverContent>
          </Popover>
        </Flex>
      </Box>
    </Box>
  );
}

export default ItemDetails;


          
          

        
          
          
        
