import { useEffect, useState } from "react"
import "./NavBar.css"
import useMovieList from "../../hooks/useMovieList"

import useDebounce from "../../hooks/useDebounce";

function Navbar () {    


   

    let lastId = 0;
    const [isAutoCompleteVisible, setIsAutoCompleteVissible] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")
    const {cardList} = useMovieList(searchTerm)
    console.log(cardList)
    // console.log("MovieList" , cardList, searchTerm)

    function handleAutoComplete (e) {
        console.log("onclick", e.target)
    }

    return (
        <div className="navbar-wrapper">
            
            <div className="search-bar">
                <input  type="text"
                        id="movie-search-input"
                        placeholder="Enter Your character here.."
                        onFocus={() => {
                            setIsAutoCompleteVissible(true)
                        }}
                        onBlur={() => {
                            setIsAutoCompleteVissible(false)
                        }}
                        onChange={useDebounce((e) => {
                            setSearchTerm(e.target.value)
                        })}
                
                />  
                    {/* <div className="auto-complete">Data Not Found...</div> */}
                <div id="result-list" style={{display: (isAutoCompleteVisible) ? "block" : "none"}}> 
                 <div key={lastId+1} className="auto-complete">Search here...{searchTerm}</div>

                    {cardList.map((movie) => <div key={lastId+1} onMouseDown={handleAutoComplete} className="auto-complete">Search here...</div>)}
                    
                    {/* <div className="auto-complete">One</div> */}
                    
                </div>
            </div>
            
            <div className="home-text"> 
                <button>Home Page</button>
            </div>
        </div>
    )
}

export default Navbar