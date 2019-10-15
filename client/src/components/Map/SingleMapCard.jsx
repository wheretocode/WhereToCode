import React from "react";
import Popup from "reactjs-popup";
import Review from "../Review/Review";


const SingleMapCard = props => {
  return (
    <>
      {props.location !== "" ? (
        <div
          style={{
            border: "1px solid black",
            margin: 10,
            padding: 10,
            width: "500px"
          }}
        >
          <img src={props.icon} />
          <p>{`name: ${props.location}`}</p>
          {/* Placeholder rating */}
          <p>{`rating: ${props.rating}`}</p>
          <p>{`address: ${props.address}`}</p>
          <Popup modal trigger={<button>Details</button>}>
        {close => <Review close={close} />}
      </Popup>
        </div>
      ) : null}
    </>
  );
};

export default SingleMapCard;
