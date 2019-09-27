import React from 'react';

const TriangleLoader = () => {
    const triangle = {
        margin: "0 auto"
    }

    const loaderT = {
        position: "relative",
        width: 0,
        height: 0,
        opacity: 0.5,
        borderLeft: "25px solid transparent",
        borderRight: "25px solid transparent",
        borderBottom: "75px solid gold",
        top: "50%",
        left: "0",
        transform: "rotate(15deg)",
        transformOrigin: "center top",
        animation: "rotate-triangle 1s linear infinite",
        animationDirection: "alternate"
    }

    const loaderTReverse = {
        position: "relative",
        width: 0,
        height: 0,
        opacity: 0.25,
        borderLeft: "25px solid transparent",
        borderRight: "25px solid transparent",
        borderBottom: "75px solid gold",
        top: "0",
        left: "0",
        transformOrigin: "center top",
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