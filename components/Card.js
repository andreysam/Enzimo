import CardHeader from './CardHeader.js';
import CardFooter from './CardFooter.js';

function Card (props) {
    return (
        <div className="doc-container">
            <CardHeader 
                photo={props.photo} 
                title={props.title}
                info={props.info}
                rating={props.rating}
                />
            <div className="border">            
            </div>            
            <CardFooter     
                prices={props.prices}
                />
                     
            </div>
    );
}


export default Card