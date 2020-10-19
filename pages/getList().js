import doctors from './doctors_array.js';
import Doctors from './DoctorsComp.js';

function getList() {
    return(
        <div className="doctor-list">
            {doctors.map(item => <Doctors doc={item.doc} price={item.price}/>)}            
        </div>
        
    );
}


export default getList