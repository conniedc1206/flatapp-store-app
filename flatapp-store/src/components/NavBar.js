import React from "react";
import { Link as ReactLink } from "react-router-dom";
import { Box, Image, Heading, Flex, Link } from "@chakra-ui/react";
import flatapplogo from "../flatapplogo.png";
import { BsCart3 } from "react-icons/bs";

function NavBar() {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      backgroundColor="#00ACEE"
      height="118px"
      alignItems="center"
      padding="30px 25px"
      boxShadow="2xl"
    >
      <Flex textAlign="center">
        <ReactLink to="/">
          <Image
            src={flatapplogo}
            height="70px"
            marginRight="7px"
            borderRadius="25%"
          />
        </ReactLink>
        <Box width="100%">
          <Heading
            size="2xl"
            padding="2%"
            _hover={{
              textDecoration: "none",
            }}
          >
            FlatApp Store
          </Heading>
        </Box>
      </Flex>
      <Flex justifyContent="end">
        <ReactLink to="/">
          <Link
            margin="1rem 1rem"
            textDecoration="none"
            fontSize="18px"
            borderBottom="1px solid white"
            _hover={{
              textDecoration: "none",
              color: "white",
            }}
          >
            Store
          </Link>
        </ReactLink>
        <ReactLink to="/seller">
          <Link
            margin="1rem 1rem"
            textDecoration="none"
            fontSize="18px"
            borderBottom="1px solid white"
            _hover={{
              textDecoration: "none",
              color: "white",
            }}
          >
            Upload
          </Link>
        </ReactLink>
        <ReactLink to="/blogs">
          <Link
            margin="1rem 1rem"
            textDecoration="none"
            fontSize="18px"
            borderBottom="1px solid white"
            _hover={{
              textDecoration: "none",
              color: "white",
            }}
          >
            Blogs
          </Link>
        </ReactLink>
        <ReactLink to="/about">
          <Link
            margin="1rem 1rem"
            textDecoration="none"
            fontSize="18px"
            borderBottom="1px solid white"
            _hover={{
              textDecoration: "none",
              color: "white",
            }}
          >
            About
          </Link>
        </ReactLink>
        <ReactLink to="/login">
          <Link
            margin="1rem 1rem"
            textDecoration="none"
            fontSize="18px"
            borderBottom="1px solid white"
            _hover={{
              textDecoration: "none",
              color: "white",
            }}
          >
            Login
          </Link>
        </ReactLink>
        <ReactLink to="/cart">
          <Link>
            <BsCart3
              margin="1rem 1rem"
              textDecoration="none"
              fontSize="18px"
              borderBottom="1px solid white"
              _hover={{
                textDecoration: "none",
                color: "white",
              }}
            />
          </Link>
        </ReactLink>
      </Flex>
    </Box>
  );
}

export default NavBar;
