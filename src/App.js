import React from "react";
import "./App.css";

const Cuberto = ({size = 40}) => {
    return (
        <div style={{width: size, height: size}}>
            <h1>Cuberto</h1>
        </div>
    );
}

export default Cuberto;