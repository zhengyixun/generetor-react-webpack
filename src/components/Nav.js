import React from 'react';
import {Link} from "react-router-dom";

class Navs extends React.Component{
    render() {
        return (
            <div className="Nav">
                <div className="NavSon"><Link to="/Home">Home</Link></div>
                <div className="NavSon"><Link to="/About">About</Link></div>
                <div className="NavSon"><Link to="/Talks">Talks</Link></div>
                <div className="NavSon"><Link to="/Loves">Loves</Link></div>
                <div className="NavSon"><Link to="/Phone">Phone</Link></div>
                <div className="NavSon"><Link to="/Map">Map</Link></div>
            </div>
        )
    }
}

export default Navs;