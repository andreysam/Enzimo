import DoctorsArray from '../components/doctors-site/DoctorsArray.js';
import Doctors from '../components/doctors-site/Doctors.js';




export default function docs() {
    return (
        <div className='app-doctor'>

            <div className='head-doctor'> 
                <a href="/"><img className="back-button" src="img/arrow.svg"/></a>
                    <div className="search-container">
                        <div className="search">
                            <input className="input-search" placeholder="Поиск по докторам"></input> 
                        </div>
                        <img src="img/search.svg"/>  
                    </div>
            </div>

            <div className="doctor-list">
                {DoctorsArray.map(item => <Doctors doc={item.doc} price={item.price}/>)}
            </div>
        </div>
       
    )
}


