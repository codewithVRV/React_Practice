import axios from "axios";
import { searchPokemonCard } from "../apis/PokemonApi";
import { useEffect, useState } from "react";


function useMovieList (...args) {
    const [cardList, setCardList] = useState([]);
    async function downloadDefaultCards (...args) {
        // console.log(args)
        const urls = args.map((name) => searchPokemonCard(name))
        // console.log(urls)
        const response = await axios.all(urls.map(url => axios.get(url)));
        // console.log(response)
        const movies = response.map((movieResponse) => movieResponse.data)
        // console.log(movies)
        setCardList([...cardList,...movies]);

        // for single use 
        // const response = await axios.get(searchPokemonCard(cardName));
        // const newData = response.data;
        

        // setCardList(preData => [...preData, newData]) 
    }

    useEffect(() => {
        // console.log("movie list called again")
        downloadDefaultCards(...args)
    }, [...args])

    return {cardList}
}
export default useMovieList;