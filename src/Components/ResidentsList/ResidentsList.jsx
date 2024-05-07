// npm modules
// import { getAllPlanets } from '../../Services/sw-api'
// import { useState, useEffect } from 'react'
// import PlanetList from '../../Pages/PlanetList/PlanetList'
// services
// import { Link } from 'react-router-dom'
// css
import './ResidentsList.css'

const ResidentsList = () => {
  // const [residentsList, setResidentsList] = useState([])

  // useEffect(() => {
  //   const fetchResidentsDetails = async () => {
  //     const residentsData = await getAllPlanets ()
  //     setResidentsList(residentsData.results.residents)
  //   }
  //   fetchResidentsDetails()
  // }, [])


  return (  
    <main>
      <h1>Residents of Planet</h1>
      {/* <h1>{props.residentsList}</h1> */}
      {/* <Link className='item' to={`/planets/${residentsList.url.replace("https://swapi.dev/api/people/", "")}`}>{residentsList._id}</Link> */}
    </main>
  )
}

export default ResidentsList