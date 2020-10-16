import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Map as LeafletMap, Marker, Popup, CircleMarker ,TileLayer } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

import mapMarkerImg from '../../assets/map-marker.svg';
import { Container, Aside, Header, Location, Map, CreateOrphanage } from './styles';

const OrphanagesMap: React.FC = () => {

  const position = [51.505, -0.09]
  return (
    <Container>
      <Aside>
        <Header>
          <img src={mapMarkerImg} alt="Map Marker"/>

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </Header>

        <Location>
          <strong>Paraíba</strong>
          <span>João Pessoa</span>
        </Location>
      </Aside>

      <Map>
        <LeafletMap 
          center={[-7.2419178,-35.8825136]} 
          zoom={15} 
          style={{ width: '100%', height: '100% '}}
        >
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
          />
          <CircleMarker center={[-7.225458, -35.880131]} radius={20} />
        </LeafletMap>
      </Map>

      <CreateOrphanage to="">
        <FiPlus size={32} color="#FFF" />
      </CreateOrphanage>
    </Container>
  );
}

export default OrphanagesMap;