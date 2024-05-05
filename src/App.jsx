// npm modules
import { Route, Routes } from 'react-router-dom'

// components
import NavBar from './Components/navBar/Navbar'
import StarshipList from './Pages/StarshipList/StarshipList'
import StarshipPage from './Pages/StarshipPage/StarshipPage'

import './App.css'

function App() {

  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/starships' element={<StarshipList />}/>
      <Route path='/starships/:idx' element={<StarshipPage />}/>
      
    </Routes>
    </>
  )
}

export default App
