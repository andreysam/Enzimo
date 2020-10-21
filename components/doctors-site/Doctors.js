import DoctorPrice from './DoctorPrice.js';
import DoctorInfo from './DoctorInfo.js';

function Doctors (props) {
    return (
        <div className="doc-container">
            <DoctorInfo doctor={props.doc}/>
            <div className="border">            
            </div>           
            <DoctorPrice doctor={props.price}/>
        </div>
    );
}


export default Doctors