import React from "react";
import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function ProjectItem({ app, handleSelectedApp }) {
  const { appName, phase, likes, id } = app;
  let { image } = app;

  const handleClick = () => {
    handleSelectedApp(app);
  };

  // if (!image) {
  image =
    "https://coursereport-production.imgix.net/uploads/school/logo/8/original/flatironschool.png?w=200&h=200";
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
        background: "lightGrey",
        borderColor: "darkGrey",
        transition: "0.2s",
      }}
    >
      <Link to={`/details/${id}`}>
        <Box height="100%">
          <img src={image} alt={appName} height="40%" width="25%" />
          <b> {appName}</b>
          <p>Phase: {phase}</p>
          <em>{likes} likes</em>
        </Box>
      </Link>
    </Box>
  );
}

export default ProjectItem;
