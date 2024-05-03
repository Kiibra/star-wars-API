import { Link } from 'react-router-dom'
import reactLogo from '../../assets/react.svg'

const NavBar = () => {
  return ( 
    //we use header b/c  we want it be the header / we'd use footor if we want it otherway
    <header>
      <img className="logo" src={ reactLogo } alt="The React logo" />
      <nav>
        <Link to='/starships'>STAR WARS STARSHIPS</Link>
      </nav>
    </header>
  )
}

export default NavBar