import "../css/proficiency.css"

import orangeCircle from "../images/skills/Orange circle icon.png"
import greyCircle from "../images/skills/Orange circle icon empty.png"

function GenerateProficiencyImages(score) {
    let returnValue = [];

    for (let index = 0; index < 5; index++) {
        if (index < score) {
            returnValue.push(<img className="proficiencies-image" src={orangeCircle} />);
        }
        else {
            returnValue.push(<img className="proficiencies-image" src={greyCircle} />)
        }
    }

    return (
        <>
            {returnValue}
        </>
    );
}

function Proficiency(title, score) {
    
    
    
    return(
        <>
            <div className="proficiencies-div">
                <div>
                    <p className="proficiencies-title">{title}</p>
                </div>
                <div>
                    {GenerateProficiencyImages(score)}
                </div>
            </div>
        </>
    );
}

export default Proficiency;