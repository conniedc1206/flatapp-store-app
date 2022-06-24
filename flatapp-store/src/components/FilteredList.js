import React from 'react'
import AppItem from './AppItem'
import { Flex } from "@chakra-ui/react"

function FilteredList({ apps, phase, handleSelectedApp }) {
  const filteredApps = apps.filter((app) => app.phase === phase)

  const renderApps = filteredApps.map(app => {
    return (
      <AppItem key={app.id} app={app} handleSelectedApp={handleSelectedApp} />
    )
  })

  return (
    <Flex
      justifyContent="center"
      width="75%"
      margin="auto"
      marginTop=".5%"
      borderWidth="1px"
      borderRadius="md"
      padding="10px"
      paddingBottom="10px"
      flexWrap="wrap"
      height="300px"
      overflowY="scroll" >
      {renderApps}
    </Flex>
  );
}

export default FilteredList;
