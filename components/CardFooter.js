import Footer from './Footer.js';

function CardFooter (props) {
    return (
        props.prices.map((item, index) => <Footer 
            key={index}

            ico={item.ico} 
            name={item.name}
            price={item.price}
        />)
    );    
}

export default CardFooter
