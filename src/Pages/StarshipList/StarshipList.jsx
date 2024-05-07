import { useEffect, useState } from "react"

import { Link } from "react-router-dom"
import { getAllStarships } from "../../Services/sw-api"

import './StarshipList.css'

const StarshipList = () => {
  const [starshipList, setStarshipList] = useState([])

  useEffect (() => {
    const fetchStarshipList = async () => {
      const starshipData = await getAllStarships()
      setStarshipList(starshipData.results)
    }
    fetchStarshipList()
  })

  // if(!starshipList.name) return <h1>Loading starships...</h1>

  return ( 
    <main>
      <h4 className="inst">Click on a ship to see it's details...🛸</h4> 
      <div className="card-list">
      {starshipList.map((starship, idx) =>
      <div className="card-ship" key={idx}>
        <Link className="item" to={`/starships/${starship.url.replace("https://swapi.dev/api/starships/", "")}`}>{starship.name}</Link>
      </div>
      )}
      </div>
    </main>
  )
}

export default StarshipList