import React from "react";
import NavBar from "./NavBar";


function ImageGallery(){
    return(
        <>
            <NavBar/>
            <h1 className="pageTitle">Image Gallery</h1>
            <div className="flexRowGrid">
                <div className="imageContainer">
                    <img id="pic1" className="imageStyle" alt="Image 1"/>
                </div>
                <div className="imageContainer">
                    <img id="pic2" className="imageStyle" alt="Image 2" />
                </div>
                <div className="imageContainer">
                    <img id="pic3" className="imageStyle" alt="Image 3" src="images/challah1.jpeg" />
                </div>
                <div className="imageContainer">
                    <img id="pic4" className="imageStyle" alt="Image 4" src="images/challah2.jpeg" />
                </div>
                {/* <div className="imageContainer">
                    <img id="pic5" className="imageStyle" alt="Image 5" src="images/challah3.png" />
                </div> */}
                <div className="imageContainer">
                    <img id="pic6" className="imageStyle" alt="Image 6" src="/images/challah4.jpeg" />
                </div>
                <div className="imageContainer">
                    <img id="pic7" className="imageStyle" alt="Image 7" src="images/challah5.jpeg" />
                </div>
                <div className="imageContainer">
                    <img id="pic8" className="imageStyle" alt="Image 8" src="images/challah6.png" />
                </div>
                {/* <div className="imageContainer">
                    <img id="pic9" className="imageStyle" alt="Image 9" src="images/challah7.png" />
                </div>
                <div className="imageContainer">
                    <img id="pic10" className="imageStyle" alt="Image 9" src="images/challah7.png" />
                </div> */}
                <div className="imageContainer">
                    <img id="pic11" className="imageStyle" alt="Image 9" src="images/challah7.png" />
                </div>

                {/* <img alt="Image 2" src="" />
                <img alt="Image 3" src="" />
                <img alt="Image 4" src="" /> */}
            </div>
        </>
    )
}

export default ImageGallery;