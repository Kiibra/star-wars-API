// npm modules
import { Route, Routes } from 'react-router-dom'

// components
import NavBar from './Components/navBar/Navbar'
import StarshipList from './Pages/StarshipList/StarshipList'
import StarshipPage from './Pages/StarshipPage/StarshipPage'

import './App.css'
import PlanetList from './Pages/PlanetList/PlanetList'
import PlanetPage from './Pages/PlanetPage/Planetpage'
import Landing from './Pages/Landing/Landing'

function App() {

  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<Landing />}/>
      <Route path='/starships' element={<StarshipList />}/>
      <Route path='/starships/:idx' element={<StarshipPage />}/>
      <Route path='/planets' element={<PlanetList />}/>
      <Route path='/Planets/:idx' element={<PlanetPage />}/>
    </Routes>
    </>
  )
}

export default App
