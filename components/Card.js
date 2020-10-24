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


            {props.prices.map((item, index) => <CardFooter 
            key={index}

            ico={item.ico} 
            name={item.name}
            price={item.price}
        />)}
                     
            </div>
    );
}


export default Card