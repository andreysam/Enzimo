import ClinicGeo from './ClinicGeo.js';
import ClinicInfo from './ClinicInfo.js';

function Clinic (props) {
    return (
        <div className="doc-container">
            <ClinicInfo clinic={props.clinic}/>
            <div className="border">            
            </div>           
            <ClinicGeo geo={props.geo}/>
        </div>
    );
}


export default Clinic