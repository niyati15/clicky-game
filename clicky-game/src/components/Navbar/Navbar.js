// Untouched bootstrap nav code
import React from "react";
import "./Navbar.css";


const Navbar = props => (
    <div className="sticky-nav">
        <div className="sticky-jumbo">
            <div className="jumbotron jumbotron-fluid">
                <div className="container nav-title">
                    <h1> Clicky Game</h1>
                    {/* <p className="lead">Play this game ans test your memory. All you have to do is make sure you don't click the same character twice.. Good Luck!</p> */}
                    <a className="navbar-brand nav-restart" href="/">Start Again</a>
                    <div className="status" >High Score: {props.high}</div>
                    <div className="status" >Current Score: {props.current}</div>
                </div>
            </div>
        </div>
    </div>
);

export default Navbar;