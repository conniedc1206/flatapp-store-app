import React from "react";
import { Input, Flex } from "@chakra-ui/react";

function SearchBar({ search, setSearch }) {
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <Flex justifyContent="center" marginBottom="1%">
      <Input
        placeholder="Search for a project by name"
        value={search}
        onChange={handleChange}
        marginTop="1%"
        width="75%"
        justifyContent="center"
      />
    </Flex>
  );
}

export default SearchBar;
