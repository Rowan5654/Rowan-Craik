import "../css/qualification.css"

function Qualification(logo, title, provider, date, titleWidth) {
    return (
        <>
            <img className="qualification-logo" src={logo} />
            <p className="qualification-title" style={{width: `${titleWidth}px`}}>{title}</p>
            <p className="qualification-provider">{provider}</p>
            <p className="qualification-date">{date}</p>
        </>
    );
}

export default Qualification;