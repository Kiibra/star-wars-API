//npm modules 
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// componenets
// import ResidentsList from '../../Components/ResidentsList/ResidentsList'
//services
import { getAllPlanets } from '../../Services/sw-api'

//css
import './PlanetList.css'
// import PlanetPage from '../PlanetPage/Planetpage'

const PlanetList = () => {
  const [planetList, setPlanetList] = useState([])
  // const [residentsList, setResidentsList] = useState([])

  useEffect(() => {
    //make reques to the  API data 
    const fetchPlanetList = async () => {
      //wait until result is loaded 
      const planetData = await getAllPlanets()
      //after that data/result is loaded, set it to the useState
      setPlanetList(planetData.results)
      // setResidentsList(planetData.results.residents)
    }
    //invoke
    fetchPlanetList()
  }, [])

  if(!planetList.length) return <h1>Loading planet details...</h1> 

  return (
      <div className="backgr">
    <main className='planets-list'>
      <h4 className="inst">Click on a planet to see it's details...🪐</h4> 
      {/* <PlanetPage residentsList={residentsList}/> */}
      <div className="card-list">
      {planetList.map((planet, idx) => 
      <div className="card" key={idx}>
      <Link className='item' to={`/planets/${planet.url.replace("https://swapi.dev/api/planets/", "")}`}>{planet.name}</Link>
      </div>
      )}
      </div>
    </main> 
      </div>
  )
}

export default PlanetList