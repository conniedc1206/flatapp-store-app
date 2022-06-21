import React from 'react'
import { useEffect, useState } from 'react'
import RecommendedList from './RecommendedList'
import FilteredList from './FilteredList'
import projects from './db.json'

function MainContainer() {

    const [apps, setApps] = useState(projects)
    
    // Replace setApps(projects) with fetch later
    
    useEffect(() => {
        setApps(projects);
    }, [])
  
    return (
    <div>
        {/* <SearchBar />
        <FilterBar /> */}
        <RecommendedList apps={apps} />
        <FilteredList apps={apps} />
    </div>
  )
}

export default MainContainer;