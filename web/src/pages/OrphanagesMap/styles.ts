import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  position: relative

  height: 100vh;
  width: 100vw;

`;

export const Aside = styled.div`
    width: 440px;
    padding: 80px;
    height: 100vh;
    background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Header = styled.div`

  h2 {
    font-size: 40px;
    font-weight: 800;
    line-height: 42px;
    margin-top: 64px;
  }

  p {
    font-size: 18px;
    line-height: 28px;
    margin-top: 24px;
  }
`;

export const Location = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 24px;
  line-height: 26px;

  strong {
    font-weight: 800;
  }
`;

export const Map = styled.div`
  z-index: 5;
  height: 100vh;
  width: 100vw;

  .map-popup .leaflet-popup-content-wrapper {
    background: rgb(255, 255, 255, 0.8);
    border-radius: 20px;
    box-shadow: none;
  }

  .map-popup .leaflet-popup-content {
    color: #0089a5;
    font-size: 20px;
    font-weight: bold;
    margin: 8px 12px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .map-popup .leaflet-popup-content a {
    width: 40px;
    height: 40px;
    background: #15c3d6;
    box-shadow: 17.2868px 27.6589px 41.4884px rgba(23, 142, 166, 0.16);
    border-radius: 12px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .map-popup  .leaflet-popup-tip-container {
    display: none;
  }
`; 

export const CreateOrphanage = styled(Link)`
  position: absolute;
  cursor: pointer;
  z-index: 10;
  right: 40px;
  bottom: 40px;

  width: 64px;
  height: 64px;
  background: #15c3d6;
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.2s;

  &:hover {
    background: #17d6eb;
  }

`;