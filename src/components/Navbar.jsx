import { Link } from "react-router-dom"

import { CiSearch } from "react-icons/ci";


import './Navbar.scss'
import Logo from '../assets/img/logo.svg'



const Navbar = () => {

  return (
    <nav>
      <div className="logo">
        <Link to='/'>
          <img src={Logo} alt="Logotipo" />
        </Link>
      </div>

      <div className="menu">
        <Link to='/'> <h3>Home</h3></Link>
        <Link to={`movie/1`}><h3>Movies</h3></Link>
        <Link to='serie'><h3>Series</h3></Link>
      </div>

      <form>
        <button type="submit"><CiSearch/></button>
        <input type="text" placeholder="Pesquisar filme"/>
      </form>
       
    </nav>
  )
}

export default Navbar