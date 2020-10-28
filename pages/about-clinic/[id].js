import DoctorsArray from "../../components/DoctorsArray";
import ClinicsArray from "../../components/ClinicsArray";
import CardHeader from "../../components/CardHeader";

import Head from "../../components/about-docs/Head";
import AboutDoc from "../../components/about-docs/AboutDoc";
import AboutClinic from "../../components/about-docs/AboutClinic";
import Card from '../../components/Card.js';

export default function About_clinic(props) {



  return (

      <div className="app">
        <Head 
          photo={"../"+props.clinic.photo}
          title={props.clinic.title}
          
        />
        <AboutClinic 
          title={props.clinic.title}          
          phone={props.clinic.about.phone}
          adres={props.clinic.about.adres}
          email={props.clinic.about.email}

          about= {
            <div className="about-clinic">
                      <div>ОГРН:</div>
                      <div className="about-doc-text">{props.clinic.about.ogrn}</div>                      
                      <div>Телефон:</div>
                      <div className="about-doc-text">{props.clinic.about.phone} </div>
                      <div>ИНН:</div>
                      <div className="about-doc-text">{props.clinic.about.inn}</div>
                      <div>Сайт:</div>
                      <div className="about-doc-text">{props.clinic.about.site}</div>
                      <div></div>
                      <div></div>
                      <div>E-mail:</div>
                      <div className="about-doc-text">{props.clinic.about.email}</div>
                  </div>
            }

          footer={
            <div>
                
              <div className="about-footer">
                <div className="about-doc-text">ООО "{props.clinic.title}"</div>
                <div className="about-doc-text">{props.clinic.about.adres}</div>
              </div>
              </div>
          }
          
        />  

        <div className="about-doc-title">
          Сотрудники</div>
          <div className="doctor-list-footer">
                {DoctorsArray.map((item, index) => <Card  className="doc-info-element-footer doc-container"
                    key={index}

                    id={index} 

                    link={'/about/[id]'}

                    photo={"../"+item.photo} 
                    title={item.title}
                    info={item.info}
                    rating={item.rating} 
                    prices={item.prices}                   
                />)}
                

            </div>
        
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
  // const doctor = DoctorsArray[context.params.id]
  const clinic = ClinicsArray[context.params.id]

  return { props: {clinic} }
}
