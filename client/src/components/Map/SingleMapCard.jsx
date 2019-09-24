import React from "react"


const SingleMapCard = (props) => {
    return (
       <>
            {
             props.location !== '' ? 
                <div style={{border: '1px solid black', margin: 10 }}>
                    <p>{`name: ${props.location}`}</p>
                </div>
            : null
            }
        </>
    )
}

export default SingleMapCard