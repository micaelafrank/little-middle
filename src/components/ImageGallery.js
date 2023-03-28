import React from "react";
import NavBar from "./NavBar";


function ImageGallery(){
    return(
        <>
            <NavBar/>
            <div className="flexRowColumn">
                <img alt="Image 1" src=""/>
                <img alt="Image 1" src="" />
                <img alt="Image 1" src="" />
                <img alt="Image 1" src="" />
            </div>
        </>
    )
}

export default ImageGallery;