import React from "react";
import NavBar from "./NavBar";


function Donations(){

    return(
        <div>
            <NavBar />
            <h1 className="pageTitle">Donations</h1>
            <p className="subtitleBlurb">Each week, 100% of proceeds are donated to a charity of our choice. Thank you to all of our generous donors. Check out the organizations that we've donated to in the past, and visit their websites to make a donation or get involved! </p>
            <div className="donorGrid">
                <div className="gridItem">
                    <h1>Feeding America</h1>
                    <img />
                    <p>Blurb</p>
                    <a href="https://www.feedingamerica.org/">Visit Website</a>
                </div>
                <div className="gridItem">
                    <h1>BMMA: Black Mamas Matter Alliance</h1>
                    <img />
                    <p>Blurb</p>
                    <a href="https://www.feedingamerica.org/">Visit Website</a>
                </div>
                <div className="gridItem">
                    <h1>Make the Road New York</h1>
                    <img />
                    <p>Blurb</p>
                    <a href="https://www.feedingamerica.org/">Visit Website</a>
                </div>
                <div className="gridItem">
                    <h1>KIND: Kids in Need of Defense</h1>
                    <img />
                    <p>Blurb</p>
                    <a href="https://www.feedingamerica.org/">Visit Website</a>
                </div>
            </div>
        </div>
    )
}

export default Donations;