import React from "react";
import NavBar from './NavBar';


function Home(){
    return(
        <div className="homepage-layout">
            <NavBar/>
            <div className="flexBoxRow">
                <div className="flexBoxColumn">
                    {/* <h1 className="title-text">Little Middle Challah</h1> */}
                    <div className="logo-img-container">
                        <div className="logo-image"></div>
                    </div>
                </div>
                <p className="info-blurb">Little Middle Challah is the brainchild of two sisters who wanted to help communities who were getting hit hardest by the pandemic. We pick a new charity each week, and 100% of what's earned is donated. Orders can be placed every Sunday for pick-up on the following Friday. New flavors every week.</p>
            </div>
        </div>
    )
}

export default Home;