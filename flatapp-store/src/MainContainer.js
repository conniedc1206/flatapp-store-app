import React, { useEffect, useState } from 'react'
import RecommendedList from './RecommendedList'
import FilteredList from './FilteredList'

function MainContainer() {

    const [apps, setApps] = useState([])
    
    useEffect(() => {
        fetch("http://localhost:3001/projects")
        .then(r => r.json())
        .then(setApps)
    }, [])

    return (
    <div>
        {/* <SearchBar />
        <FilterBar /> */}
        <RecommendedList apps={apps} />
        {/* <FilteredList apps={apps} /> */}
    </div>
  )
}

export default MainContainer;