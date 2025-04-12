import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";

import './Navbar.scss'
import Logo from '../assets/img/logo.svg'
import { CiSearch } from "react-icons/ci";


const Navbar = () => {

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault()

    if(!search) return

    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <nav>
      <div className="logo">
        <Link to='/'>
          <img src={Logo} alt="Logotipo" />
        </Link>
      </div>

      <div className="menu">
        <Link to='/'><h3>Filmes</h3></Link>
        <Link to='serie'><h3>Series</h3></Link>
      </div>

      <form onSubmit={handleSubmit}>
        <button type="submit"><CiSearch/></button>
        <input type="text" placeholder="Pesquisar título" onChange={(e) => setSearch(e.target.value)} value={search}/>
      </form>
       
    </nav>
  )
}

export default Navbar