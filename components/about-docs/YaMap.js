
import { YMaps, Map, Placemark } from "react-yandex-maps";

import ClinicsArray from "../../components/ClinicsArray";



const mapData = {
    center: [45.020589, 41.940014],
            zoom: 12,
            controls: ['zoomControl', 'searchControl', 'typeSelector',  'fullscreenControl', 'routeButtonControl']
  };


  const option = {
    preset:'islands#circleIcon',
    iconColor: '#ff0000'
  }

  function YaMap (props) {
      return (
            <div>                
                <YMaps query={{ load: "package.full" }}>
                    <Map defaultState={mapData} width={"100%"}>
                        {ClinicsArray.map((item, index) => <Placemark 
                        modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
                            geometry={item.coordinates} 
                            key={index} 
                            options={option} 
                            properties={{
                                hintContent: (props.title),
                                balloonContent: (props.adres),
                            }}
                            />)} 
                    </Map>
                </YMaps>
            </div>
      );
  }

  export default YaMap
