import React from "react";
import { NavLink } from 'react-router-dom'

function NavBar(){

    return(
        <nav className="navBarLayout">
            <div className="flexBoxRowNav">
                <h1 className="title-text"><a id="navBarLMCName" href="/">Little Middle Challah</a></h1>
                <div className=" flexBoxRowNavTabs">
                {/* flexBoxColNav" */}
                    <NavLink className="navFont" to="/about">About</NavLink>
                    <NavLink className="navFont" to="/order">Order form</NavLink>
                    <NavLink className="navFont">Image gallery</NavLink>
                    <NavLink className="navFont">Where we donate</NavLink>
                    <NavLink className="navFont">Flavors</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;