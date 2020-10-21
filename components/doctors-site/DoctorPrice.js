function DoctorPrice (props) {
    return (
        <div className="price-containter">            
            <div className="price-element">
                <div>
                    <img className="icon"
                    src="img/price/online.svg"
                    alt={props.doctor.name}
                    />
                </div>
                <div className="price-services">
                    Онлайн приём:  
                </div>
                <div className="price">
                    {props.doctor.online}  
                </div>  
            </div> 

            <div className="price-element">
            <div>
                    <img className="icon"
                    src="img/price/clinics.svg"
                    alt={props.doctor.name}
                    />
                </div>
                <div className="price-services">
                    Прием в клинике:
                </div>
                <div className="price">
                    {props.doctor.clinics}
                </div>  
            </div>

            <div className="home-price price-element">
                <div>
                    <img className="icon"
                    src="img/price/home.svg"
                    alt={props.doctor.name}
                    />
                </div>
                <div className="price-services">
                    Прием на дому: 
                </div>
                <div className="price">
                    {props.doctor.home}  
                </div>  
            </div>  
            
           
        </div>
    );
}

export default DoctorPrice
