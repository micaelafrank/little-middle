import React from "react";
import NavBar from "./NavBar";


function ImageGallery(){
    return(
        <>
            <NavBar/>
            <h1 className="pageTitle">Image Gallery</h1>
            <img alt="Dough on its first rise" src="/images/challah0.jpeg" />
            <div className="flexRowGrid">
                <div className="imageContainer">
                    <img className="imageStyle" alt="Dough on its first rise" src="/images/challah0.jpeg" />
                </div>
                {/* <div className="imageContainer">
                    <img id="pic2" className="imageStyle" alt="Image 2" />
                </div>
                <div className="imageContainer">
                    <img id="pic3" className="imageStyle" alt="Image 3" src="images/challah1.jpeg" />
                </div>
                <div className="imageContainer">
                    <img id="pic4" className="imageStyle" alt="Image 4" src="images/challah2.jpeg" />
                </div> */}
                {/* <img alt="Image 2" src="" />
                <img alt="Image 3" src="" />
                <img alt="Image 4" src="" /> */}
            </div>
        </>
    )
}

export default ImageGallery;