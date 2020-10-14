import React from 'react';
import { FiPlus } from 'react-icons/fi';

import mapMarkerImg from '../../assets/map-marker.svg';
import { Container, Aside, Header, Location, Map, CreateOrphanage } from './styles';

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

      <Map></Map>

      <CreateOrphanage>
        <FiPlus size={32} color="#FFF" />
      </CreateOrphanage>
    </Container>
  );
}

export default OrphanagesMap;