import React from 'react'
import { Button, Stack } from "@chakra-ui/react"

function FilterBar({ setPhase }) {

    const handleClick = (e) => {
        setPhase(e.target.value)
    }

  return (
    <Stack
    marginTop="2%" 
    direction="row"
    justifyContent="space-evenly" >
        <Button
        onClick={handleClick}
        value="1"
        borderRadius="50px" >
          Phase 1
        </Button>
        <Button
        onClick={handleClick}
        value="2"
        borderRadius="50px" >
          Phase 2
        </Button>
        <Button
        onClick={handleClick}
        value="3"
        borderRadius="50px" >
          Phase 3
        </Button>
        <Button
        onClick={handleClick}
        value="4"
        borderRadius="50px" >
          Phase 4
        </Button>
        <Button
        onClick={handleClick}
        value="5"
        borderRadius="50px" >
          Phase 5
        </Button>
    </Stack>
  )
}

export default FilterBar