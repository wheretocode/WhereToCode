import React from "react"

const SingleMapCard = (props) => {
    return (
        <div style={{border: '1px solid black', margin: 10 }} >
            {props.location}
        </div>
    )
}

export default SingleMapCard