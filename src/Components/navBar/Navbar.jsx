import { Link } from 'react-router-dom'
import NavIcon from '../../assets/icon.png'

// import reactLogo from '../../assets/react.svg'
import './NavBar.css'

const NavBar = () => {
  return ( 
    //we use header b/c  we want it be the header / we'd use footor if we want it otherway
    <header>
      {/* <img className="logo" src={ reactLogo } alt="The React logo" /> */}
      <nav>
      <Link to="/"><img className='nav-icon' src={NavIcon} alt="star wars image" /></Link>
        <Link to='/starships'>STAR WARS STARSHIPS</Link>
        <Link to='/planets'>STAR WARS PLANETS</Link>
      </nav>
    </header>
  )
}

export default NavBar