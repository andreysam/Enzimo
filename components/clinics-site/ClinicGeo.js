function ClinicGeo (props) {
    return (
        <div className="price-containter"> 
            <div className="price-element">
            <img src="img/clinics/geo.svg" alt="geo"></img>
                <div className="price-services">
                    {props.geo}
                </div>
            </div> 
        </div>
    );
}

export default ClinicGeo
