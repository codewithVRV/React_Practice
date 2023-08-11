import Navbar from "../Component/NavBar/Navbar";
import PokemonCard from "../Component/Card/Card";
import useMovieList from "../hooks/useMovieList";

import "./Home.css"
import axios from "axios";
import { useEffect, useState } from "react";

function Home () {
    const [apiName, setApiName] = useState([])
    console.log(apiName)

    const arr = ["bulbasaur", "charizard", "beedrill", "raticate", "ivysaur", "squirtle", "venusaur", "charmander", "charmeleon"]
    // console.log(arr)
    const args = [...apiName]
    const {cardList} = useMovieList(...args)

    async function downloadAllNameList () {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon")
        // console.log(response.data.results)
        const nameArray = response.data.results;
        // console.log(nameArray)
        nameArray.map( async (data) => {
            setApiName(predata =>  [...predata, data.name])
            console.log(predata)

            
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