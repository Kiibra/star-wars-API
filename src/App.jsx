// npm modules
import { Route, Routes } from 'react-router-dom'

// components
import NavBar from './Components/navBar/Navbar'
import StarshipList from './Pages/StarshipList/StarshipList'
import StarshipPage from './Pages/StarshipPage/StarshipPage'

import './App.css'
import PlanetsList from './Pages/Planets/PlanetsList'

function App() {

  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/starships' element={<StarshipList />}/>
      <Route path='/starships/:idx' element={<StarshipPage />}/>
      <Route path='/planets' element={<PlanetsList />}/>
    </Routes>
    </>
  )
}

export default App
