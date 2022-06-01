import "../css/blenderShowcase.css"

import boat from "../images/blender/Boat.png"
import bowling from "../images/blender/Bowling.png"
import chess1 from "../images/blender/Chess Scene 1.png"
import chessWhite from "../images/blender/Chess White.png"
import crystal from "../images/blender/Crystal.png"
import face from "../images/blender/Face.png" 
import hallway from "../images/blender/hallway.png"
import hut from "../images/blender/Hut.png"
import lampOnRamp from "../images/blender/Lamp On Ramp.png"
import safe from "../images/blender/Safe.png"
import stage from "../images/blender/Stage.png"
import teddy from "../images/blender/Teddy.png"
import temple from "../images/blender/Temple.png"
import wellCycles from "../images/blender/Well Cycles.png"

function BlenderShowcase() {
    const images = [boat, bowling, chess1, chessWhite, crystal, face, hallway, hut, lampOnRamp, safe, stage, teddy, temple, wellCycles];
    
    function GenerateImageShowcase(image) {
        return (
            <>
                <div className="blender-showcase-grid-item">
                    <img className="showcase-image" src={image}/>
                </div>
            </>
        );
    }

    return (
        <>
            <div className="blender-showcase-grid">
                <div className="blender-showcase-grid-item">
                    <iframe width="648" height="372" src="https://www.youtube.com/embed/g_2W4OSwJKE"></iframe>
                </div>
                {images.map((image) => GenerateImageShowcase(image))}
                <div className="blender-showcase-grid-item"></div>    
            </div>
        </>
    )
}

export default BlenderShowcase;