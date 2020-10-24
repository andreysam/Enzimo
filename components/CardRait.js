import Star from './Star.js';

function CardRait (props) {
 
    const stars = [{},{},{},{},{}]
    return(
        stars.map((item, index) => <Star 
        key={index}
        itteration={index}
        rating={props.rating}/>
        )
    );
    
       
        
    
}

export default CardRait