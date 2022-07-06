import Lightbox from "./ShowcaseLightbox.js"

import "../css/blenderShowcase.css"

import bowling from "../images/blender/Bowling.png"
import chess from "../images/blender/Chess White.png"
import cone from "../images/blender/Cone.png"
import crystal from "../images/blender/Crystal.png"
import water from "../images/blender/Cycles Water.png"
import hallway from "../images/blender/hallway.png"
import lamp from "../images/blender/Lamp On Ramp.png"
import fence from "../images/blender/Mesh Fence.png"
import poolrooms from "../images/blender/Poolrooms.png"
import poolrooms2 from "../images/blender/Poolrooms2.png"
import roadBarricade from "../images/blender/RoadBarricade.png"
import roadblockLarge from "../images/blender/RoadBlockLarge.png"
import roadblockSmall from "../images/blender/RoadblockSmall.png"
import safeDoor from "../images/blender/Safe Door.png"
import ogre from "../images/blender/Ogre.png"
import modularVehicles from "../images/blender/modular vehicles.png"


const images = [ogre, bowling, chess, lamp, poolrooms, poolrooms2, cone, crystal, water, hallway, modularVehicles, fence,  roadBarricade, roadblockLarge, roadblockSmall, safeDoor];

function BlenderShowcase() {
    return (
        <>
            <div className="blender-showcase-grid">
                <div className="blender-showcase-grid-item">
                    <iframe width="648" height="372" src="https://www.youtube.com/embed/g_2W4OSwJKE"></iframe>
                </div>
                <div className="blender-showcase-grid-item">
                    <iframe width="648" height="372" src="https://www.youtube.com/embed/mt5S-DPgqdY"></iframe>
                </div>
                <Lightbox lightboxImages={images}/>
            </div>
        </>
    )
}

export default BlenderShowcase;