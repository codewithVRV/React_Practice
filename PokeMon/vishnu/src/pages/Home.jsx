import Navbar from "../Component/NavBar/Navbar";
import PokemonCard from "../Component/Card/Card";
import useMovieList from "../hooks/useMovieList";

import "./Home.css"
import axios from "axios";
import { useEffect, useState } from "react";

function Home () {
    const [apiName, setApiName] = useState([])
   

    const arr = ["bulbasaur", "charizard", "beedrill", "raticate", "ivysaur", "squirtle", "venusaur", "charmander", "charmeleon"]
    
    const args = [...arr]
    const {cardList} = useMovieList(...args)
    
    async function downloadAllNameList () {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon")
        const nameArray = response.data.results;
        nameArray.map( (data) => {
            setApiName(predata =>  [...predata, data.name])
            
            
        })
    }

    

    useEffect(() => {
        
        downloadAllNameList()
    }, [])

    

    return (
        <>
            <Navbar />
            <div className="card-list-wrapper">
                {/* <PokemonCard name={movies.name} url={movies.url}/> */}

                {cardList.map((card) => <PokemonCard 
                                        key={card.id}
                                        name={card.name}
                                        url={card.sprites.front_default}
                
                />)}
               
            </div>
        </>
    )
}

export default Home;



<div>
    <h1>React App</h1>
</div>