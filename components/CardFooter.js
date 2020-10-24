import Footer from './Footer.js';

function CardFooter (props) {
    return (
        <div className="price-containter">            
             <div className="price-element">                
                <div>
                <img className="icon"
                    src={props.ico}
                    alt={props.title}
                />
                </div>
                <div className="price-services">
                    {props.name} 
                </div>
                <div className="price">
                    {props.price}  
                </div> 
            </div> 
        </div>
    );    
}

export default CardFooter

