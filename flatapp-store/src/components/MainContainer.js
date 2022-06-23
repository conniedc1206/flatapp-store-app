import React, { useEffect, useState } from 'react'
import RecommendedList from './RecommendedList'
import FilteredList from './FilteredList'
import FilterBar from './FilterBar'
import SearchBar from './SearchBar'

function MainContainer({ apps, setApps }) {

    const [phase, setPhase] = useState("1")
    const [search, setSearch] = useState("")
    
    useEffect(() => {
        fetch("http://localhost:3000/apps")
        .then(r => r.json())
        .then(setApps)
    }, [])

    return (
    <div>
        <SearchBar setSearch={setSearch} search={search} />
        <RecommendedList apps={apps} search={search} />
        <FilterBar setPhase={setPhase} />
        <FilteredList apps={apps} phase={phase} />
    </div>
  )
}

export default MainContainer;