import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Card from "../components/Card";

const searchMovieURL = import.meta.env.VITE_SEARCH_MOVIE
const searchSerieURL = import.meta.env.VITE_SEARCH_SERIE
const apiKEY = import.meta.env.VITE_API_KEY

import './Search.scss'


const Search = () =>{
    const [searchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const query = searchParams.get("q");

    const getAllSearch = async() =>{

        try{
            const [movieRes, serieRes] = await Promise.all([
                fetch(`${searchMovieURL}?${apiKEY}&query=${query}`),
                fetch(`${searchSerieURL}?${apiKEY}&query=${query}`)
              ]);
        
              const [movieData, serieData] = await Promise.all([
                movieRes.json(),
                serieRes.json()
              ]);
        
              const allResults = [...movieData.results, ...serieData.results];
        
              setMovies(allResults);


        }catch(err){
            throw new Error(err)
        }
    }

    useEffect(() =>{
        getAllSearch();
    },[query])

    return(
        <div>
            <div className="container">
                <h2 className="query">Resultados para: {query}</h2>

                <div className="cards-container">

                {movies.map((movie) => (
                    <Card key={movie.id} movie={movie} />
                    ))}
                </div>
                
            </div>
        </div>
    )
}

export default Search