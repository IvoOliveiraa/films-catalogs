import { Link } from "react-router-dom";

import './Card.scss';

const img500 = import.meta.env.VITE_IMG;


const Card = ({movie}) =>{

    return (
        <div className="card">
            <Link to={`sobre/${movie.id}`} key={movie.id}>
                <img src={`${img500}${movie.poster_path}`} alt={movie.title} />  
            </Link>        
        </div>
        
    )

}

export default Card