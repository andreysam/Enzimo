import DoctorsArray from "../../components/DoctorsArray";
import ClinicsArray from "../../components/ClinicsArray";
import CardHeader from "../../components/CardHeader";

import Head from "../../components/about-docs/Head";
import AboutDoc from "../../components/about-docs/AboutDoc";
import AboutClinic from "../../components/about-docs/AboutClinic";

export default function About_doctors(props) {



  return (

      <div className="app">
        <Head 
          photo={"../"+props.doctor.photo}
          title={props.doctor.title}
          
          info={
            <div className="info-text">
                        {props.doctor.info}
                </div>
           
           }

          buttons={
            <div className="button-text">
                        <div className="input-button">
                            <div className="input-text">
                                Запись на приём
                            </div>
                        </div>
                        <div className="output-button">
                            <div className="output-text">
                                Вызов на дом
                            </div>
                        </div>
                    </div>
          }
        />
        <AboutDoc 
          education={props.doctor.about.education}
          skill={props.doctor.about.skill}
          place={props.doctor.about.place}
          experience={props.doctor.about.experience}

          
          
        />
        <AboutClinic 
          title={props.clinic.title} 

          about= {
          <div className="about-doc">
                    <div>Телефон:</div>
                    <div className="about-doc-text">{props.clinic.about.phone} </div>
                    <div>Адресс:</div>
                    <div className="about-doc-text">{props.clinic.about.adres}</div>
                    <div>E-mail:</div>
                    <div className="about-doc-text">{props.clinic.about.email}</div>
                </div>
          }
        />  
        <div className="doctor-list-area">
          <div className="about-doc-title">
            Коллеги
          </div>
            <div className="doctor-list-footer">
              {DoctorsArray.map((item,index) =>
              <CardHeader  className="doc-info-element-footer doc-container"
                key={index}
                title={item.title}
                info={item.info}
                rating={item.rating}
                photo={"../"+item.photo}
              />)}
            </div>
        </div>
      </div>

  );
}




export async function getServerSideProps(context) {
  const doctor = DoctorsArray[context.params.id]
  const clinic = ClinicsArray[doctor.id_clinic]

  return { props: { doctor, clinic } }
}
