import React from 'react'
import { Box } from "@chakra-ui/react"

function ProjectItem({ app }) {
   
    const { appName, phase, likes } = app;
    let { image } = app;
  
    const handleClick = () => {
        console.log('hello world');
        //this should link to details page of corresponding project
    }

    //iterates through all creators and puts commas between their names
    // let authors = "";
    // developerName.forEach((author) => authors += author + ", ")
    // authors = authors.slice(0, authors.length-2);

    // if (!image){
        image = "https://coursereport-production.imgix.net/uploads/school/logo/8/original/flatironschool.png?w=200&h=200"
    // }

    return (
    <Box
    onClick={handleClick}
    borderWidth="2px"
    width="200px"
    height="150px"
    borderRadius="lg"
    textAlign="center"
    overflow="hidden" 
    margin="5px"
    cursor="pointer" 
    _hover={{
        background:"lightGrey",
        borderColor:"darkGrey",
        transition:"0.2s"
    }} >
        <img src={image} alt={appName} height="40%" width="25%" />
        <b > {appName}</b>
        <p>Phase: {phase}</p>
        <em>{likes} likes</em>
    </Box>
  )
}

export default ProjectItem;