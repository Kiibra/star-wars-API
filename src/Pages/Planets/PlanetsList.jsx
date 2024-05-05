//npm modules 
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

//services
import { getAllPlanets } from '../../Services/sw-api'

//css
import './PlanetsList.css'

const PlanetsList = () => {
  const [planetsList, setPlanetsList] = useState([])

  useEffect(() => {
    //make reques to the  API data 
    const fetchPlanetsList = async () => {
      //wait until result is loaded 
      const planetData = await getAllPlanets()
      //after that data/result is loaded, set it to the useState
      setPlanetsList(planetData.results)
    }
    //invoke
    fetchPlanetsList()
  }, [])

  return (
    <main className='planets-list'>
      <h2>Hii PLANETSSS</h2>
      <div className="card-list">
      {planetsList.map((planet, idx) => 
      <div className="card" key={idx}>
      <Link className='item' to={`/planets/${planet.idx}`}>{planet.name}</Link>
      </div>
      )}
      </div>
    </main> 
  )
}

export default PlanetsList