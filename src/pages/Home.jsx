import { useState, useEffect } from "react";

const movieApiURL = import.meta.env.VITE_API_MOVIE;
const apiKEY = import.meta.env.VITE_API_KEY;

import './Home.scss';
import Slide from "../components/Slide";
import Card from "../components/Card";



const Home = () =>{

    const [moviesApi, setMoviesApi] = useState({
        upcoming: [],
        now_playing: [],
        top_rated: []
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
        getAllMovies('upcoming');
        getAllMovies('now_playing');
        getAllMovies('top_rated');
    },[])
    

    return (
        <div className="container">
            <Slide moviesApi={moviesApi} category="upcoming"/>

            <div className="cards-container">

                {moviesApi.now_playing.map((movie) => (
                   <Card key={movie.id} movie={movie} />
                ))}

                {moviesApi.top_rated.map((movie) => (
                   <Card key={movie.id} movie={movie} />
                ))}

            </div>
            
        </div>
        
    )
   
}

export default Home