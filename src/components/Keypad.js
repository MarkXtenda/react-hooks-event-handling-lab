// Code Keypad Component Here
import React from "react";

function Keypad() {
    function typing() {
        console.log('Entering password...')
    }
    return(
        <input type="password" onChange={typing}></input>
    )
}

export default Keypad