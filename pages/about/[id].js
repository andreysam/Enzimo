
import { YMaps, Map, Placemark } from "react-yandex-maps";

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
          info={props.doctor.info}
        />
        <AboutDoc 
          education={props.doctor.about.education}
          skill={props.doctor.about.skill}
          place={props.doctor.about.place}
          experience={props.doctor.about.experience}
        />
        <AboutClinic 
          phone={props.clinic.about.phone}
          adres={props.clinic.about.adres}
          email={props.clinic.about.email}
        />  
        {/* <CardHeader   className="doc-info-element-header"        
            photo={"../"+props.doctor.photo}
            title={props.doctor.title}
            info={props.doctor.info}
            /> */}
            <div className="doctor-list-area">
            
        <div className="doctor-list-footer">
          {DoctorsArray.map((item) =>
          <CardHeader  className="doc-info-element-footer doc-container"
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



// export default function About_doctors(props) {
//     return (

//         <div>
//         <YMaps query={{ load: "package.full" }}>
//             <Map defaultState={mapData} width={"900px"}>
//                 {coordinates.map(item => <Placemark geometry={item} options={option}/>)}
                
//             </Map>
//         </YMaps>
//         </div>
//     );
// }


