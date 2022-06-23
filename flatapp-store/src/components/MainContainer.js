import React, { useEffect, useState } from "react";
import RecommendedList from "./RecommendedList";
import FilteredList from "./FilteredList";
import FilterBar from "./FilterBar";
import SearchBar from "./SearchBar";
import { Box, Heading } from "@chakra-ui/react";

function MainContainer({ apps, setApps, handleSelectedApp }) {
  const [phase, setPhase] = useState("1");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/apps")
      .then((r) => r.json())
      .then(setApps);
  }, []);

  return (
    <Box textAlign="center" >
      <SearchBar setSearch={setSearch} search={search} />
      <Heading size="sm">Recommended Apps</Heading>
      <RecommendedList
        apps={apps}
        search={search}
        handleSelectedApp={handleSelectedApp}
      />
      <FilterBar setPhase={setPhase} />
      <Heading marginTop=".5%" size="sm">Find apps by phase</Heading>
      <FilteredList
        apps={apps}
        phase={phase}
        handleSelectedApp={handleSelectedApp}
      />
    </Box>
  );
}

export default MainContainer;
