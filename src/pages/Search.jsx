import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Card from "../components/Card";
import Loader from "../components/Loader";


const searchMovieURL = import.meta.env.VITE_SEARCH_MOVIE
const apiKEY = import.meta.env.VITE_API_KEY

import './Search.scss'


const Search = () =>{
    const [loading, setLoading] = useState(true);
    const [searchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const query = searchParams.get("q");

    const getAllSearch = async() =>{

        try{
           const res = await fetch(`${searchMovieURL}?${apiKEY}&query=${query}`);
           const data = await res.json();

           setMovies(data.results);


        }catch(err){
            throw new Error(err)
        }
    }

    useEffect(() => {
        
        const fetchAll = async () => {
            setLoading(true);
            try {
                await getAllSearch();
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
    
        fetchAll();
    }, [query]);
    

    if (loading) return <Loader />;

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