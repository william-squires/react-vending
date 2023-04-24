import { Link } from "react-router-dom";
import React from "react";



/**
 * Renders a list of snacks to visit.
 * 
 * Props
 * -none
 * 
 * State
 * -none
 * 
 * App -> VendingMachine -> {snacks}
 * 
 */
function VendingMachine() {
    return (
        <div>
            <h1>Vending Machine</h1>
            <h4>Look at our snacks!</h4>
            <Link to="/Pepsi">Pepsi</Link>
            <br/>
            <Link to="/Doritos">Doritos</Link>
            <br/>
            <Link to="/Skittles">Skittles</Link>
        </div>
    )
}


export default VendingMachine;