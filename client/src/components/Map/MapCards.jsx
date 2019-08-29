import React from "react"
import SingleMapCard from "./SingleMapCard";

const MapCards = (props) => {
    return (
        <div>
            {props.locations.map(location => {
                return <SingleMapCard key={location.id} location={location} />
            })}
        </div>
    )
}

export default MapCards;