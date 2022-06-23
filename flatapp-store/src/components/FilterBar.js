import React from 'react'
import { Button, ButtonGroup } from "@chakra-ui/react"

function FilterBar({ setPhase }) {

    const handleClick = (e) => {
        setPhase(e.target.value)
    }

  return (
    <ButtonGroup
    marginTop="2%" 
    display="flex"
    direction="row"
    justifyContent="space-evenly"
    colorScheme="twitter" >
        <Button
        onClick={handleClick}
        value="1"
        borderRadius="50px"
        _focus={{
          border: "1px solid black",
        }} 
        >
          Phase 1
        </Button>
        <Button
        onClick={handleClick}
        value="2"
        borderRadius="50px"
        _focus={{
          border: "1px solid black"
        }}  >
          Phase 2
        </Button>
        <Button
        onClick={handleClick}
        value="3"
        borderRadius="50px"
        _focus={{
          border: "1px solid black"
        }}  >
          Phase 3
        </Button>
        <Button
        onClick={handleClick}
        value="4"
        borderRadius="50px"
        _focus={{
          border: "1px solid black"
        }}  >
          Phase 4
        </Button>
        <Button
        onClick={handleClick}
        value="5"
        borderRadius="50px"
        _focus={{
          border: "1px solid black"
        }}  >
          Phase 5
        </Button>
    </ButtonGroup>
  )
}

export default FilterBar