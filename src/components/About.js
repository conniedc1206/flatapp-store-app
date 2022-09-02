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
      marginBottom="5%"
      width="60%"
      height="40%"
      borderRadius="5%"
      boxShadow="dark-lg" >
        <Heading padding="2%" size="3xl">Welcome to FlatApp</Heading>
        <Heading padding="2%" size="md">
          FlatApp Store is an e-commerce platform designed to showcase single-page
          apps created by members of Flatiron “Stranger Strings” cohort, as well
          as other Flatiron students.
        </Heading>
        {/* users will be able to heading */}
      <Box>
          <li>
            Browse and search for cool SPAs by up-and-coming developers from
            Flatiron
          </li>
          <li>See detailed view of each app</li>
          <li>Save apps to a cart</li>
          <li>
            Developers can upload their projects permanently to the platform using
            our “sellers” page
          </li>
      </Box>
      
      <Box marginTop="2%">
        <Heading size="lg">Technologies used:</Heading>
        <p>
          Our frontend was built with React.js and communicates with our
          json-server in our backend
        </p>
      </Box>

      <Box marginTop="2%">
        <Heading size="lg">Goals:</Heading>
        <Heading size="sm">
          Our goal was to build an React application and simulate a professional
          work environment:
        </Heading>
        <li>Plan out your wireframes and features</li>
        <li>Pitched our app in a project proposal</li>
        <li>Use Github for our version control workflow</li>
        <li>
          Create a json-server to create a RESTful API and make both a GET and a
          POST request
        </li>
        <li>Utilize Chakra UI for our CSS styling</li>
      </Box>

      <Box marginTop="2%">
        <Heading size="lg">Accomplishments:</Heading>
          <li>
            We were able to create 7 client-side routes using React Router in our
            nav bar/other UI element that allows users to navigate between routes
          </li>
          <li>
            We created use a controlled form to make our POST request to our
            json-server
          </li>
          <li>
            We rendered developers' apps onto our store page using array filter
            method and GET requests from our json-server
          </li>
          <li>
            We organized our code into purposeful components in order to keep it
            clean and dry
          </li>
          <li>we incorporated a UI framework for our styling with Chakra UI</li>
        </Box>

        <Box marginTop="2%">
          <Heading size="md">We're glad to have you here!</Heading>
          <Heading marginBottom="2%" size="md">Now, let's get exploring!</Heading>
          <Link to="/"> 
            <Button boxShadow='dark-lg' 
            p='6' rounded='md' 
            bg='white'
            marginBottom="2%" >
              <TiArrowBack color="#00ACEE"/>
            </Button>
          </Link> 
        </Box> 
      </Box>
    </Flex>
  );
}

export default About;
