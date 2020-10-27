

function AboutDoc (props) {
    return (
        <div className="about-doc-container">
            <div className="about-doc-title">
                О докторе
            </div>
            <div className="about-doc">
                <div>Образование:</div>
                <div className="about-doc-text">{props.education}</div>
                <div>Проф. навыки:</div>
                <div className="about-doc-text">{props.skill}</div>
                <div>Место работы:</div>
                <div className="about-doc-text">{props.place}</div>
                <div>Стаж:</div>
                <div className="about-doc-text">{props.experience}</div>
            </div>
        </div>
    );
}


export default AboutDoc