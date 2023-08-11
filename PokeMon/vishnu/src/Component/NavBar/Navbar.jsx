import { useState } from "react"
import "./NavBar.css"
import useMovieList from "../../hooks/useMovieList"

function Navbar () {    


    let lastId = 0;
    const [isAutoCompleteVisible, setIsAutoCompleteVissible] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")
    const {cardList} = useMovieList(searchTerm)

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
                        onChange={(e) => {
                            setSearchTerm(e.target.value)
                        }}
                
                />
                <div id="result-list" style={{display: (isAutoCompleteVisible) ? "block" : "none"}}> 
                    {cardList.map((movie) => <div key={lastId+1} className="auto-complete">Search here...{searchTerm}</div>)}
                    
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