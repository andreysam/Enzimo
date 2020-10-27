import CardHeader from './CardHeader.js';
import CardFooter from './CardFooter.js';
import Router from 'next/router';

function Card (props) {

    
    return (
        <div className="doc-container" onClick={() => {
            Router.push({
              pathname: '/about/[id]',
              query: { id: props.id },
            })}}>
            <CardHeader className= 'doc-info-element'
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