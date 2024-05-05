import { useEffect, useState } from "react"

import { Link } from "react-router-dom"
import { getAllStarships } from "../../Services/sw-api"


const StarshipList = () => {
  const [starshipList, setStarshipList] = useState([])

  useEffect (() => {
    const fetchStarshipList = async () => {
      const starshipData = await getAllStarships()
      setStarshipList(starshipData.results)
    }
    fetchStarshipList()
  })

  if(!starshipList.length) return <h1>Loading starships...</h1>

  return ( 
    <main className="starship-list">
      {/* <h1>{props.starshipList.name}</h1> */}
      {starshipList.map((starship, idx) =>
      <div className="starship-card" key={idx}>
        <Link to={`/starships/${starship.url.replace("https://swapi.dev/api/starships/", "")}`}>{starship.name}</Link>
      </div>
      )}
    </main>
  )
}

export default StarshipList