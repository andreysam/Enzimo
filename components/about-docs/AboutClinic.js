
import YaMap from "../../components/about-docs/YaMap.js";


function AboutClinic (props) {
    return (
        <div className="about-doc-container">
            <div className="about-doc-title">
                О клинике
            </div>
            <div className="about-doc-table">
                {props.about}
                
                {props.info}
                <div className="border-footer"></div>
                {props.footer}
            </div>
            <YaMap 
                title={props.title}
                adres={props.adres}
            />
           
        </div>
    );
}


export default AboutClinic