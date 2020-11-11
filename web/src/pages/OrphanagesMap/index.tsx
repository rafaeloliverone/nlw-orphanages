import React from 'react';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Map as LeafletMap, Marker, Popup, TileLayer } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

import mapMarkerImg from '../../assets/map-marker.svg';
import { Container, Aside, Header, Location, Map, CreateOrphanage } from './styles';
import MapIcon from '../../components/MapIcon';


const OrphanagesMap: React.FC = () => {

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
          <Marker
            icon={MapIcon}
            position={[-7.225458, -35.880131]}
          >
            <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
              Lar das meninas 
              <Link to="/orphanages/1">
                <FiArrowRight size={32} color="#FFF"/>
              </Link>
            </Popup>
          </Marker>
        </LeafletMap>
      </Map>

      <CreateOrphanage to="/orphanages/create">
        <FiPlus size={32} color="#FFF" />
      </CreateOrphanage>
    </Container>
  );
}

export default OrphanagesMap;