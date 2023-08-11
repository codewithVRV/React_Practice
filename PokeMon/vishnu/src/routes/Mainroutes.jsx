import {Routes, Route} from "react-router-dom"
import Home from "../pages/Home";
import CardDetails from "../pages/CardDetails";


function Mainroutes () {
    return (
        <Routes>
            <Route path="/" element={ <Home />} />
            <Route path="/card/:id" element={ <CardDetails />} />
        </Routes>
    )
}

export default Mainroutes;