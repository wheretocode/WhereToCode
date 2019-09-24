import React from "react"
import SingleMapCard from "./SingleMapCard";

const MapCards = (props) => {
    return (
        <div>
            {props.locations.map(location => {
                return <SingleMapCard location={location.name}/>
                
            })}
        </div>
    )
}

export default MapCards;