import React from "react";

import './Navbar.module.css';

import logo from '../../../img/icons8-numbers.svg';
import github from '../../../img/icons8-github.svg';
import { Tooltip } from "react-tooltip";

function Navbar(){
    return(
        <>
            <section>
                <nav className="navbar navbar-dark bg-dark fixed-top">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <img src={logo} alt="" height={40}></img>
                            <span>Tables</span>
                        </a>
                    <div>
                        <a data-tooltip-id="github" data-tooltip-content="Creator's Github" className="navbar-brand" href="https://github.com/Allysonubius" target="_blank">
                            <img src={github} alt="github" height={50}/>
                            <Tooltip id="github" />
                        </a>
                    </div>
                    </div>
                </nav>
            </section>
        </>
    )
}

export default Navbar;