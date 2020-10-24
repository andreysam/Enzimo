import Footer from './Footer.js';

function CardFooter (props) {
    return (
       <Footer 
            ico={props.ico} 
            name={props.name}
            price={props.price}
        />
    );    
}

export default CardFooter

