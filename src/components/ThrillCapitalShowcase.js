import Lightbox from "./ShowcaseLightbox.js"

import "../css/thrillCapitalShowcase.css"
import "../css/galleryModal.css"

import car from "../images/thrill capital/424car.png"
import cloudCompare from "../images/thrill capital/cloud compare.png"
import fullBlender from "../images/thrill capital/full blender.png"
import housesOriginal from "../images/thrill capital/houses original.png"
import housesFinal from "../images/thrill capital/houses final.png"
import openTopography from "../images/thrill capital/open topography.png"
import projectFinal from "../images/thrill capital/project final.png"
import terrainStamp from "../images/thrill capital/terrain stamp.png"

const images = [openTopography, cloudCompare, terrainStamp, fullBlender, housesOriginal, housesFinal, projectFinal, car];

function ThrillCapitalShowcase() {
    return(
        <>
            <div className="thrill-capital-showcase-grid">
                <div className="thrill-capital-showcase-grid-item" id="intro">
                    <p className="thrill-capital-title">Thrill Capital Internship</p>
                    <p className="thrill-capital-paragraph">During the first half of 2022, I participated in an internship with Thrill Capital, working with 3D point cloud geographic lidar data to create a 3D simulated enviroment within the unity game engine.
                        <br></br>
                        <br></br>
                        The idea behind the project was to create a "serious game" driver distration tool, which would place the user onto a terrain built to simulate a neighbourhood in real life Utar, America and have them drive a digital twin vehicle of a formula one racecar, known as the 424 hypercar. 
                    </p>
                </div>
                <div className="screenshots">
                    <Lightbox lightboxImages={images}/>
                </div>
            </div>
        </>
    )
}

export default ThrillCapitalShowcase;