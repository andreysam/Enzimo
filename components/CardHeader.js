import CardPhoto from './CardPhoto.js';
import CardRait from './CardRait.js';

function CardHeader (props) {
    return (
        <div  className="doc-info-element">
            <CardPhoto photo={props.photo}/>
            <div className="doctor-name">
               {props.title}
            </div>
            <div className="doctor-spec">
                <div className="doctor-post">
                   {props.info}
                </div>
                <CardRait rating={props.rating}/>
            </div>
        </div>
    );
}


export default CardHeader