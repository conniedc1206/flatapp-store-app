import React from "react";
import { Link } from "react-router-dom"
import { Box, Flex, Heading, Button } from "@chakra-ui/react"
import { TiArrowBack } from "react-icons/ti";

function About() {
  return (
    <Flex justifyContent="center">
      <Box 
      textAlign="center"
      backgroundColor="#00ACEE" 
      marginTop="5%"
      width="800px"
      height="600px"
      borderRadius="5%"
      boxShadow="dark-lg" >
        <Heading padding="2%" size="3xl">Welcome to FlatApp</Heading>
        <Heading padding="2%" size="md">
          FlatApp is a place where you are able to pick, <br></br>view and
          sell your fantastic items and gain experience<br></br> in other people's worlds in 
          Software Development.
        </Heading>
        <Heading size="md">We're glad to have you here!</Heading>
        <Heading marginBottom="2%" size="md">Now, let's get exploring!</Heading>
        <Link to="/"> 
          <Button boxShadow='dark-lg' p='6' rounded='md' bg='white'>
            <TiArrowBack color="#00ACEE"/>
          </Button>
        </Link> 
      </Box>
    </Flex>
  );
}

export default About;
