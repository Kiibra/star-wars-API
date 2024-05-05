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
      <div className="starship-details">
      <h1 id="header">STARSHIP DETAILS</h1>
        <h2>Name: {starshipDetails.name}</h2>
        <h3>Model: {starshipDetails.model}</h3>
        <h4>Crew: {starshipDetails.crew}</h4>
        <p>Passengers: {starshipDetails.passengers}</p>
      </div>
    </main>
  )
}

export default StarshipPage