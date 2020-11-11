import React from 'react';
import { FiArrowLeft } from'react-icons/fi';
import { useHistory } from 'react-router-dom';

import mapMarkerImg from '../../assets/map-marker.svg';

import { Aside, Footer } from './styles';


const Sidebar: React.FC = () => {
  const { goBack } = useHistory();

  return (
    <Aside>
      <img src={mapMarkerImg} alt="Happy" />

      <Footer>
        <button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>
      </Footer>
    </Aside>
  )
}

export default Sidebar;