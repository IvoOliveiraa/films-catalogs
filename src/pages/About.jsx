import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Loader from "../components/Loader";

const movieApiURL = import.meta.env.VITE_API_MOVIE;
const apiKEY = import.meta.env.VITE_API_KEY;
const imgOriginal = import.meta.env.VITE_IMG_ORI;

import './About.scss'

const About = () =>{

    const [loading, setLoading] = useState(true);
    const [title, setTitle] = useState([]);
    const {id} = useParams();

    const getAllTitle = async() =>{

        try{
            const res = await fetch(`${movieApiURL}${id}?${apiKEY}&language=pt-BR`)
            const data = await res.json();

            setTitle(data);
            console.log(data)


        }catch(err){
            throw new Error(err)
        }
    }

    useEffect(() =>{
        
        const fetchAll = async () => {
            setLoading(true);
            try {
                await getAllTitle();
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
    
        fetchAll();
    },[])

    if (loading) return <Loader />;

    return(
        <div>
           <div className="container-info">

                <div className="infos">
                    <div className="img">
                        <img
                            src={`${imgOriginal}${title.backdrop_path}`}
                            alt={title.title}
                        />
                    </div>

                    <div className="txt">
                        
                        <div className="title">
                            <h2>{title.title}</h2>
                        </div>

                        <div className="genres">
                            {title.genres?.map((genre) => (
                                <ul key={genre.id}>{genre.name}</ul>
                            ))}
                        </div>
                        
                        <div className="status">
                            <div className="data">
                                <p>{title.release_date?.slice(0, 4)}</p>
                            </div>

                            <div className="time">
                                <p>
                                    {title.runtime &&
                                    `${Math.floor(title.runtime / 60)} hora${Math.floor(title.runtime / 60) === 1 ? '' : 's'} e ${title.runtime % 60} min`}
                                </p>
                            </div>
                            
                            <div className="vote">
                                <p>{title.vote_average && `${(title.vote_average * 10).toFixed(0)}%`}</p>
                            </div>
                        </div>

                        <div className="overview">
                            <p><span>Descrição:</span>{title.overview?.length > 0 ? title.overview : "Não há descrição para esse título."}</p>
                        </div>
                    </div>

                </div>
        </div>


        </div>
    )
}

export default About