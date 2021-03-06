import DoctorsArray from '../components/DoctorsArray.js';
import Card from '../components/Card.js';



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
                {DoctorsArray.map((item, index) => <Card 
                    key={index}

                    id={index} 

                    link={'/about/[id]'}

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
