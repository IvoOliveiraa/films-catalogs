import { useState, useEffect } from "react";

const seriesApiURL = import.meta.env.VITE_API_SERIE;
const apiKEY = import.meta.env.VITE_API_KEY;

import './Series.scss';
import Slide from '../components/Slide'
import Card from "../components/Card";


const Series = () =>{

    const [seriesApi, setSeriesApi] = useState({
        on_the_air: [],
        airing_today: [],
        top_rated: []
    });

    const getAllSeries = async(category) =>{
        try{
            const res = await fetch(`${seriesApiURL}${category}?${apiKEY}&language=pt-br`);
            const data = await res.json();

            setSeriesApi(prevState => ({
                ...prevState,
                [category]: data.results
            })) 

        }catch(err){
            throw new Error(err)
        }
    }


    useEffect(() =>{
        getAllSeries('on_the_air');
        getAllSeries('airing_today');
        getAllSeries('top_rated');
    },[])



    return(
        <div className="container">
            <Slide moviesApi={seriesApi} category="on_the_air" />

            <div className="cards-container">

                {seriesApi.top_rated.map((serie) => (
                    <Card key={serie.id} movie={serie} />
                ))}

                {seriesApi.airing_today.map((serie) => (
                    <Card key={serie.id} movie={serie} />
                ))}
                
            </div>

        </div>
    )
}

export default Series