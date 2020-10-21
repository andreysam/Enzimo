import ClinicArray from '../components/clinics-site/ClinicArray.js';
import Clinic from '../components/clinics-site/Clinic.js';

export default function clinics() {
    return (
        <div className='app-doctor'>

            <div className='head-doctor'> 
                <a href="/"><img className="back-button" src="img/arrow.svg"/></a>
                    <div className="search-container">
                        <div className="search">
                            <input className="input-search" placeholder="Поиск по клиникам"></input> 
                        </div>
                        <img src="img/search.svg"/>  
                    </div>
            </div>

            <div className="doctor-list">
                {ClinicArray.map(item => <Clinic clinic={item.clinic} geo={item.geo}/>)}
            </div>
        </div>
       
    )
}

