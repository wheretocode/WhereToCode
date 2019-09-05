import React from "react"
import SingleMapCard from "./SingleMapCard";

const MapCards = (props) => {
    return (
        <div>
            {props.locations.map(location => {
                return <SingleMapCard location={location.name} id={location.place_Id}/>
                
            })}
            {console.log(props)}
        </div>
    )
}

export default MapCards;