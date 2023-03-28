import React from "react";
import { NavLink } from 'react-router-dom'


function NavBar(){

    return(
        <nav className="navBarLayout">
            <div className="flexBoxRowNav">
                <h1 className="title-text">Little Middle Challah</h1>
                <div className=" flexBoxRowNavTabs">
                {/* flexBoxColNav" */}
                    <NavLink to="order">Order form</NavLink>
                    <NavLink>Image gallery</NavLink>
                    <NavLink>Where we donate</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;