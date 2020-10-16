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