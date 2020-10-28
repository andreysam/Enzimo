
import YaMap from "../../components/about-docs/YaMap.js";


function AboutClinic (props) {
    return (
        <div className="about-doc-container">
            <div className="about-doc-title">
                О клинике
            </div>
            <div className="about-doc">
                <div>Телефон:</div>
                <div className="about-doc-text">{props.phone}</div>
                <div>Адресс:</div>
                <div className="about-doc-text">{props.adres}</div>
                <div>E-mail:</div>
                <div className="about-doc-text">{props.email}</div>
            </div>
            <YaMap 
                title={props.title}
                adres={props.adres}
            />
           
        </div>
    );
}


export default AboutClinic