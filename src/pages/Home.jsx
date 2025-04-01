import { useState, useEffect } from "react";


const movieApiURL = import.meta.env.VITE_API_MOVIE;
const apiKEY = import.meta.env.VITE_API_KEY;
const img500 = import.meta.env.VITE_IMG;

import './Home.scss';
import Slide from "../components/Slide";



const Home = () =>{

    const [moviesApi, setMoviesApi] = useState({
        top_rated: [],
        popular: [],
        now_playing: [],
        upcoming: [],
    });

    const getAllMovies = async(category) =>{

        try{
            const res = await fetch(`${movieApiURL}${category}?${apiKEY}&language=pt-br`);
            const data = await res.json();

            setMoviesApi(prevState => ({
                ...prevState,
                [category]: data.results
            }))


        }catch(err){
            throw new Error(err)
        }
    }

    useEffect(() =>{
        getAllMovies('top_rated');
        getAllMovies('popular');
        getAllMovies('now_playing');
        getAllMovies('upcoming');
    },[])
    

    return (
        <div className="container">
            <Slide moviesApi={moviesApi}/>
        </div>
        
    )
   
}

export default Home