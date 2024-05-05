import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

//services
import { getStarship } from "../../Services/sw-api"

//css
import './StarshipPage.css'

const StarshipPage = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const { idx } = useParams()

  useEffect(() => {
    const fetchDetails = async () => {
      
      // API CALL
      const starshipData = await getStarship(idx)
      // console.log(starshipData)
      // SET STATE
      setStarshipDetails(starshipData)
    }
    fetchDetails()

  }, [idx])

  if(!starshipDetails.name) return <h1>Loading ship details...</h1>

  return (  
    <main>
      <h1 id="header">SHIP DETAILS</h1>
      <div className="starship-details">
        <h3>Name: {starshipDetails.name}</h3>
        <h4>Model: {starshipDetails.model}</h4>
        <h4>Crew: {starshipDetails.crew}</h4>
        <p>Passengers: {starshipDetails.passengers}</p>
      </div>
    </main>
  )
}

export default StarshipPage