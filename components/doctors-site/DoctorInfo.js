import DoctorAvatar from './DoctorAvatar.js';

function DoctorInfo (props) {
    return (
        <div  className="doc-info-element">
            <DoctorAvatar doctor={props.doctor}/>
            <div className="doctor-name">
               {props.doctor.name}
            </div>
            <div className="doctor-spec">
                <div className="doctor-post">
                   {props.doctor.post}
                </div>
                <div className="doctor-rating">
                    <img className="rait-element" src="img/raiting/rait.svg"/>                    
                    <img className="rait-element" src="img/raiting/rait.svg"/>
                    <img className="rait-element" src="img/raiting/rait.svg"/>                    
                    <img className="rait-element" src="img/raiting/rait.svg"/>
                    <img className="rait-element" src="img/raiting/rait.svg"/>  

                    {/* <input type="radio" id="star-1" name="rating" value="1"/>
                    <input type="radio" id="star-2" name="rating" value="2"/>
                    <input type="radio" id="star-3" name="rating" value="3"/>
                    <input type="radio" id="star-4" name="rating" value="4"/>
                    <input type="radio" id="star-5" name="rating" value="5"/> */}
                    {/* {props.doctor.rating} */}
                </div>
            </div>
        </div>
    );
}


export default DoctorInfo