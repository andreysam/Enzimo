import ClinicsArray from '../components/ClinicsArray.js';
import Card from '../components/Card.js';




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
            {ClinicsArray.map(item => <Card 
                    photo={item.photo} 
                    title={item.title}
                    info={item.info}
                    rating={item.rating} 
                    prices={item.prices}
                    
                />)}
            </div>      
        </div>
       
    )
}

