import React, { useState } from 'react';

import "../css/lightboxShowcase.css"

function Lightbox(props) {

    const images = props.lightboxImages;

    const [imageToShow, setImageToShow] = useState("");
    const [lightboxDisplay, setLightBoxDisplay] = useState(false);

    const imageCards = images.map(image => (
        <div className="image-showcase-grid-item">
            <img className="showcase-image" src={image} onClick={() => showImage(image)} />
        </div>
    ));

    const showImage = (image) => {
        setImageToShow(image);
        setLightBoxDisplay(true);
    };

    const hideLightBox = () => {
        setLightBoxDisplay(false);
    };

    const showNext = (e) => {
        e.stopPropagation();
        let currentIndex = images.indexOf(imageToShow);
        if (currentIndex >= 7) {
            setImageToShow(images[0]);
        }
        else {
            let nextImage = images[currentIndex + 1];
            setImageToShow(nextImage);
        }
    };

    const showPrev = (e) => {
        e.stopPropagation();
        let currentIndex = images.indexOf(imageToShow);
        if (currentIndex <= 0) {
            setImageToShow(images[images.length - 1]);
        }
        else {
            let prevImage = images[currentIndex - 1];
            setImageToShow(prevImage);
        }
    };

    return (
        <>
            {imageCards}
            
            {
                lightboxDisplay ?
                <div id="lightbox" onClick={hideLightBox}>
                    <button className="lightbox-button" onClick={showPrev}>⭠</button>
                    <img id="lightbox-img" src={imageToShow} />
                    <button className="lightbox-button" onClick={showNext}>⭢</button>
                </div>
                : ""
            }
        </>
    );
}

export default Lightbox;