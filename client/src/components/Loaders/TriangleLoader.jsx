import React from 'react';

const TriangleLoader = () => {
    const triangle = {
        margin: "0 auto",
        position: "relative"
    }

    const loaderT = {
        position: "absolute",
        width: 0,
        height: 0,
        opacity: 0.5,
        borderLeft: "25px solid transparent",
        borderRight: "25px solid transparent",
        borderBottom: "75px solid gold",
        top: "50%",
        left: "75px",
        transform: "rotate(15deg)",
        transform: "translateX(-50%)",
        transformOrigin: "center top",
        animation: "rotate-triangle 1s linear infinite",
        animationDirection: "alternate"
    }

    const loaderTReverse = {
        position: "absolute",
        width: 0,
        height: 0,
        opacity: 0.25,
        borderLeft: "25px solid transparent",
        borderRight: "25px solid transparent",
        borderBottom: "75px solid gold",
        top: "50%",
        left: "75px",
        transformOrigin: "center top",
        transform: "translateX(-50%)",
        transform: "rotate(-22deg)",
        animation: "rotate-reverse 1s linear infinite",
        animationDirection: "alternate",
    }

    return(
        <div style={triangle}>
            <div style={loaderT}></div>
            <div style={loaderTReverse}></div>
        </div>
    );
}

export default TriangleLoader;