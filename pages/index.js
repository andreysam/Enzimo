


//Функция  заполнения листа заболеваний
function Disease(props) {
  return (
    <div className="disease-element"  style={{background: props.disease.color}}>
      <div className="disease-element-img">
        <img
          src={props.disease.img}
          alt={props.disease.name} />
      </div>
      <div className="disease-element-name">{props.disease.name}</div>
    </div>
  )
}

//Функция  заполнения листа врачей
function Doctor(props) {
  return (
    <div className="doctor-element">
      <div className="doctor-element-img">
        <img
          src={props.doctor.img}
          alt={props.doctor.name} />
      </div>
      <div  className="doctor-element-text">
        <div className="doctor-element-name">{props.doctor.name}</div>
        <div className="doctor-element-desc">{props.doctor.desc}</div>
      </div>
    </div>
  )
}

//Функция  заполнения листа клиники
function Clinics(props) { 
  return (
      <div className="clinics-element" style={{background: props.clinics.color}}>
        <div className="clinics-element-circle"><img src="img/clinics/circle.svg" alt="123"/></div>
         <div className="clinics-element-img">
          <img
            src={props.clinics.img}
            alt={props.clinics.name} />
         </div>
         <div className="clinics-element-name" style={{color: props.clinics.textcolor}}>{props.clinics.name}</div>      
      </div>
    )
}

function Footer(props) { 
  return (
    <div className="footer-padding">
      <div className="footer-circle footer-element">
            <img
            src={props.footer.img}
            alt="" />
      </div>
    </div>
    )
}

export default function Index() {
  return (
    <div className="app">
    <div className="head">
      
        <img src="../img/head/logo.svg" alt="Enzimo"/>
      
      <div>
        <img src="img/head/search.svg" alt="search"/>
        <img src="img/head/qest.svg" alt="qest"/>
    </div>
    </div>

    <div className="disease-area">    
      <div className="disease-container" id="disease-slider">  
      <img className="disease-back-button" src="img/arrow.svg" onClick={() => document.getElementById('disease-slider').scrollLeft-=300}/>
        <div className="disease-list">            
            <Disease disease={{ name: "Боли в животе", img: "img/disease/stomach.svg", color:"linear-gradient(313.26deg, rgba(249, 177, 97, 0.5) 57.2%, rgba(251, 193, 134, 0.5) 84.09%)"}}/>
            <Disease disease={{ name: "Зубная боль", img: "img/disease/tooth.svg", color:"linear-gradient(298.7deg, rgba(80, 133, 238, 0.5) 38.31%, rgba(124, 159, 227, 0.5) 77.56%)"}}/>
            <Disease disease={{ name: "Последствия травм", img: "img/disease/injury.svg", color:"linear-gradient(301.3deg, rgba(53, 173, 156, 0.5) 36.46%, rgba(92, 199, 183, 0.5) 74.37%)"}}/>        
            <Disease disease={{ name: "Проблемы с сердцем", img: "img/disease/heart2 1.svg", color:" linear-gradient(299.96deg, rgba(219, 103, 142, 0.5) 47.21%, rgba(232, 148, 176, 0.5) 76.12%)"}}/>
            <Disease disease={{ name: "Простуда", img: "img/disease/XMLID 1497.svg", color:" linear-gradient(313.26deg, rgba(249, 177, 97, 0.5) 57.2%, rgba(251, 193, 134, 0.5) 84.09%)"}}/> 
            <Disease disease={{ name: "Боли в животе", img: "img/disease/stomach.svg", color:"linear-gradient(313.26deg, rgba(249, 177, 97, 0.5) 57.2%, rgba(251, 193, 134, 0.5) 84.09%)"}}/>
            <Disease disease={{ name: "Зубная боль", img: "img/disease/tooth.svg", color:"linear-gradient(298.7deg, rgba(80, 133, 238, 0.5) 38.31%, rgba(124, 159, 227, 0.5) 77.56%)"}}/>
            <Disease disease={{ name: "Последствия травм", img: "img/disease/injury.svg", color:"linear-gradient(301.3deg, rgba(53, 173, 156, 0.5) 36.46%, rgba(92, 199, 183, 0.5) 74.37%)"}}/>        
        </div>
        <img className="disease-next-button" src="img/arrow.svg" onClick={() => document.getElementById('disease-slider').scrollLeft+=300}/>
      </div>
    </div>    

     <div className="doctor-container">
       <div className="doctor-list">
         <Doctor doctor={{ name: "Терапевт", img: "img/doctor/1.svg", desc:"Специалист общего профиля"}}/>
         <Doctor doctor={{ name: "Педиатр", img: "img/doctor/2.svg", desc:"Специалист общего профиля"}}/>
         <Doctor doctor={{ name: "Лор", img: "img/doctor/3.svg", desc:"Специалист общего профиля"}}/>
       
         <Doctor doctor={{ name: "Фониатор", img: "img/doctor/4.svg", desc:"Специалист общего профиля"}}/>
         <Doctor doctor={{ name: "Уролог", img: "img/doctor/5.svg", desc:"Специалист общего профиля"}}/>
         <Doctor doctor={{ name: "Офтальмолог", img: "img/doctor/6.svg", desc:"Специалист общего профиля"}}/>
      

         <Doctor doctor={{ name: "Гастроэнтеролог", img: "img/doctor/7.svg", desc:"Специалист общего профиля"}}/>
         <Doctor doctor={{ name: "Невролог", img: "img/doctor/8.svg", desc:"Специалист общего профиля"}}/>
         <Doctor doctor={{ name: "Стаматолог терапевт", img: "img/doctor/9.svg", desc:"Специалист общего профиля"}}/>
       </div>

  <div className="doctor-link"><a href="doctors">Посмотреть все {'>'}</a></div>
     </div>
     
     
     
     <div className="clinics-head"><a href="clinics">КЛИНИКИ</a></div>
     
     <div className="clinics-area">
      <div className="clinics-container" id="clinics-slider">
      <img className="clinics-back-button" src="img/arrow.svg" onClick={() => document.getElementById('clinics-slider').scrollLeft-=200}/>  
          <div className="clinics-list">        
            <Clinics clinics={{name: "Клиника Марии Поповой", img: "img/clinics/popova.svg", color: "linear-gradient(293.6deg, #3AC3AF 50.62%, #64DBCA 95.85%)", textcolor: "#FFFFFF"}}/>
            <Clinics clinics={{name: "Медицинский центр Вита", img: "img/clinics/vita.svg", color: "linear-gradient(296.23deg, #F7F9FB 28.99%, #FFFFFF 73.91%)", textcolor: "#042D48"}}/>
            <Clinics clinics={{name: "Лор клиника", img: "img/clinics/lor.svg", color: "linear-gradient(293.6deg, #518CFF 50.62%, #86ADF9 95.85%)", textcolor: "#FFFFFF"}}/>
            <Clinics clinics={{name: "Клиника Марии Поповой", img: "img/clinics/popova.svg", color: "linear-gradient(293.6deg, #3AC3AF 50.62%, #64DBCA 95.85%)", textcolor: "#FFFFFF"}}/>
            <Clinics clinics={{name: "Медицинский центр Вита", img: "img/clinics/vita.svg", color: "linear-gradient(296.23deg, #F7F9FB 28.99%, #FFFFFF 73.91%)", textcolor: "#042D48"}}/>
            <Clinics clinics={{name: "Лор клиника", img: "img/clinics/lor.svg", color: "linear-gradient(293.6deg, #518CFF 50.62%, #86ADF9 95.85%)", textcolor: "#FFFFFF"}}/>          
        </div>   
        <img className="clinics-next-button" src="img/arrow.svg" onClick={() => document.getElementById('clinics-slider').scrollLeft+=200}/>    
        </div>  
      </div>

     <div className="footer-list">
        <Footer footer={{img: "img/footer/logo.svg"}}/>
        <Footer footer={{img: "img/footer/kalendar.svg"}}/>
        <Footer footer={{img: "img/footer/statist.svg"}}/>
        <Footer footer={{img: "img/footer/user.svg"}}/>
     </div>
     
 </div>
  )
}
