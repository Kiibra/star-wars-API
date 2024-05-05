//npm modules
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

//services
import { getAPlanet } from '../../Services/sw-api'

//css
import './PlanetPage.css'

const PlanetPage = () => {
  const [planetDetails, setPlanetDetails] = useState({})
  const { idx } = useParams()

  useEffect (() => {
    const fetchDetails = async () => {
      //API CALL
      const planetData = await getAPlanet(idx)
      setPlanetDetails(planetData)
    }
    //invoke
    fetchDetails()
  }, [idx])
  if(!planetDetails.name) return <h1>Loading ship details...</h1> 

  return (  
    <main className='page-container'>
      <h1 id='header'>Planet Details</h1>
      <div className="details">
      <h3>Name: {planetDetails.name}</h3>
      <h4>Diameter: {planetDetails.diameter}</h4>
      <p>Gravity: {planetDetails.gravity}</p>
      <p>Population: {planetDetails.population}</p>
      </div>
    </main>
  )
}
export default PlanetPage