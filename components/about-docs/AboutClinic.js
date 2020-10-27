
import { YMaps, Map, Placemark } from "react-yandex-maps";

import ClinicsArray from "../../components/ClinicsArray";
  
const mapData = {
    center: [45.020589, 41.940014],
            zoom: 12,
            controls: ['zoomControl', 'searchControl', 'typeSelector',  'fullscreenControl', 'routeButtonControl']
  };

  const coordinates =     [45.020589, 41.940014];

  const option = {
    preset:'islands#circleIcon'
    ,
    iconColor: '#ff0000'
  }

function AboutClinic (props) {
    return (
        <div className="about-doc-container">
            <div className="about-doc-title">
                О клинике
            </div>
            <div className="about-doc">
                <div>Телефон:</div>
                <div className="about-doc-text">{props.phone}</div>
                <div>Адресс:</div>
                <div className="about-doc-text">{props.adres}</div>
                <div>E-mail:</div>
                <div className="about-doc-text">{props.email}</div>
            </div>
            <div>
                <YMaps query={{ load: "package.full" }}>
                    <Map defaultState={mapData} width={"100%"}>
                        {ClinicsArray.map(item => <Placemark geometry={item.coordinates} options={option}/>)}
                        
                    </Map>
                </YMaps>
            </div>
        </div>
    );
}


export default AboutClinic