function Star(props) {
        
        if (props.itteration < props.rating) {
            return (
                <img className="rait-element" src="img/raiting/rait.svg"/>  
            );
        }
        else {
            return (
                <img className="rait-element" src="img/raiting/rait-null.svg"/> 
            );
           
        }
}


export default Star