function CardRait (props) {

    if  (props.rating==0) {
        return (
            <div className="doctor-rating">
                        <img className="rait-element" src="img/raiting/rait-null.svg"/>                    
                        <img className="rait-element" src="img/raiting/rait-null.svg"/>
                        <img className="rait-element" src="img/raiting/rait-null.svg"/>
                        <img className="rait-element" src="img/raiting/rait-null.svg"/>
                        <img className="rait-element" src="img/raiting/rait-null.svg"/>
    
            </div>
        );
    } 

    else if  (props.rating==1) {
        return (
            <div className="doctor-rating">
                        <img className="rait-element" src="img/raiting/rait.svg"/>                    
                        <img className="rait-element" src="img/raiting/rait-null.svg"/>
                        <img className="rait-element" src="img/raiting/rait-null.svg"/>
                        <img className="rait-element" src="img/raiting/rait-null.svg"/>
                        <img className="rait-element" src="img/raiting/rait-null.svg"/>
    
            </div>
        );
    }  
    else if  (props.rating==2) {
        return (
            <div className="doctor-rating">
                        <img className="rait-element" src="img/raiting/rait.svg"/>                    
                        <img className="rait-element" src="img/raiting/rait.svg"/> 
                        <img className="rait-element" src="img/raiting/rait-null.svg"/>
                        <img className="rait-element" src="img/raiting/rait-null.svg"/>
                        <img className="rait-element" src="img/raiting/rait-null.svg"/>
    
            </div>
        );
    }
    else if (props.rating==3) {
        return (
            <div className="doctor-rating">
                        <img className="rait-element" src="img/raiting/rait.svg"/>                    
                        <img className="rait-element" src="img/raiting/rait.svg"/> 
                        <img className="rait-element" src="img/raiting/rait.svg"/> 
                        <img className="rait-element" src="img/raiting/rait-null.svg"/>
                        <img className="rait-element" src="img/raiting/rait-null.svg"/>
    
            </div>
        );
    }
    else if (props.rating==4) {
        return (
            <div className="doctor-rating">
                        <img className="rait-element" src="img/raiting/rait.svg"/>                    
                        <img className="rait-element" src="img/raiting/rait.svg"/> 
                        <img className="rait-element" src="img/raiting/rait.svg"/> 
                        <img className="rait-element" src="img/raiting/rait.svg"/> 
                        <img className="rait-element" src="img/raiting/rait-null.svg"/>
    
            </div>
        );
    }

    else 
        return (
            <div className="doctor-rating">
            <img className="rait-element" src="img/raiting/rait.svg"/>                    
            <img className="rait-element" src="img/raiting/rait.svg"/> 
            <img className="rait-element" src="img/raiting/rait.svg"/> 
            <img className="rait-element" src="img/raiting/rait.svg"/> 
            <img className="rait-element" src="img/raiting/rait.svg"/> 

        </div>
        );
        
    }
    
   

export default CardRait