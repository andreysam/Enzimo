

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


function DoctorAvatar (props) {
    return (
        <img className="avatar"
            src={props.doctor.avatar}
            alt={props.doctor.name}
        />

    );
}



const doctors = [
    {
        doc: {
            avatar: "img/doctors/doctor.png",
            name: "Куприянов Артем Николаевич",
            post: "Терапевт",
            rating: ""
        },
        price: {
            online: "1 800 ₽",
            clinics: "1 800 ₽",
            home: "1 800 ₽"
        }  
    },
    {
        doc: {
            avatar: "img/doctors/doctor.png",
            name: "Куприянов Артем Николаевич",
            post: "Терапевт",
            rating: ""
        },
        price: {
            online: "1 800 ₽",
            clinics: "1 800 ₽",
            home: "1 800 ₽"
        }  
    },
    {
        doc: {
            avatar: "img/doctors/doctor.png",
            name: "Куприянов Артем Николаевич",
            post: "Терапевт",
            rating: ""
        },
        price: {
            online: "1 800 ₽",
            clinics: "1 800 ₽",
            home: "1 800 ₽"
        }  
    },
    {
        doc: {
            avatar: "img/doctors/doctor.png",
            name: "Куприянов Артем Николаевич",
            post: "Терапевт",
            rating: ""
        },
        price: {
            online: "1 800 ₽",
            clinics: "1 800 ₽",
            home: "1 800 ₽"
        }  
    },
    {
        doc: {
            avatar: "img/doctors/doctor.png",
            name: "Куприянов Артем Николаевич",
            post: "Терапевт",
            rating: ""
        },
        price: {
            online: "1 800 ₽",
            clinics: "1 800 ₽",
            home: "1 800 ₽"
        }  
    },
    {
        doc: {
            avatar: "img/doctors/doctor.png",
            name: "Куприянов Артем Николаевич",
            post: "Терапевт",
            rating: ""
        },
        price: {
            online: "1 800 ₽",
            clinics: "1 800 ₽",
            home: "1 800 ₽"
        }  
    },
    {
        doc: {
            avatar: "img/doctors/doctor.png",
            name: "Куприянов Артем Николаевич",
            post: "Терапевт",
            rating: ""
        },
        price: {
            online: "1 800 ₽",
            clinics: "1 800 ₽",
            home: "1 800 ₽"
        }  
    },
    {
        doc: {
            avatar: "img/doctors/doctor.png",
            name: "Куприянов Артем Николаевич",
            post: "Терапевт",
            rating: ""
        },
        price: {
            online: "1 800 ₽",
            clinics: "1 800 ₽",
            home: "1 800 ₽"
        }  
    },
    {
        doc: {
            avatar: "img/doctors/doctor.png",
            name: "Куприянов Артем Николаевич",
            post: "Терапевт",
            rating: ""
        },
        price: {
            online: "1 800 ₽",
            clinics: "1 800 ₽",
            home: "1 800 ₽"
        }  
    },
];

function getList() {
    return(
        <div className="doctor-list">
            {doctors.map(item => <Doctors doc={item.doc} price={item.price}/>)}            
        </div>
        
    );
}


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
            <div className="app">
                {getList()}
            </div>
        </div>
       
    )
}


