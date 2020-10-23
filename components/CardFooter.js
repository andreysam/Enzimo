import Footer from './Footer.js';

function CardFooter (props) {
    console.log(props)
    return (
        props.prices.map(item => <Footer 
            ico={item.ico} 
            name={item.name}
            price={item.price}
        />)
    );    
}

export default CardFooter
