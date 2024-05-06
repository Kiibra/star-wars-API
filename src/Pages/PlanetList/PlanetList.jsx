//npm modules 
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

//services
import { getAllPlanets } from '../../Services/sw-api'

//css
import './PlanetList.css'

const PlanetList = () => {
  const [planetList, setPlanetList] = useState([])

  useEffect(() => {
    //make reques to the  API data 
    const fetchPlanetList = async () => {
      //wait until result is loaded 
      const planetData = await getAllPlanets()
      //after that data/result is loaded, set it to the useState
      setPlanetList(planetData.results)
    }
    //invoke
    fetchPlanetList()
  }, [])

  if(!planetList.name) return <h1>Loading planet details...</h1> 

  return (
    <main className='planets-list'>
            <h4 className="inst">Click on a planet to see it's details...🪐</h4> 
      <div className="card-list">
      {planetList.map((planet, idx) => 
      <div className="card" key={idx}>
      <Link className='item' to={`/planets/${planet.url.replace("https://swapi.dev/api/planets/", "")}`}>{planet.name}</Link>
      </div>
      )}
      </div>
    </main> 
  )
}

export default PlanetList