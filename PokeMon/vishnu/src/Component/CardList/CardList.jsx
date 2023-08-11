import axios from 'axios';
import { useEffect, useState } from 'react';



function CardList () {
    const[allPokeCards, setAllPokeCards] = useState([])
    
    async function getAllCards () {
        try {
            const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
        // const data = await response.json()
        // console.log(response.data);
            const data = response.data;
            // console.log(data.results)
            const obj = data.results;
            // console.log(obj)
            obj.map(async (url) => {
               const result = await axios.get(url.url)
            //    console.log(result.data)
                
               setAllPokeCards([...allPokeCards, result.data])
            //    console.log(allPokeCards)
            })
        }
        catch (error) {
            console.log("Error Handled", error)
        }
    }

    useEffect (() => {
        getAllCards()
    }, [])

    return (
        <>
            <h1>Result Pending</h1>
        </>
    )
}

export default CardList;