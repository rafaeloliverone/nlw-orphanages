import styled from 'styled-components';

import imageBackground from '../../assets/landing.svg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);

  display: flex;
  justify-content: center;
  align-items: center;

`;

export const Content = styled.div`
  position: relative;
  width: 100vw;
  max-width: 1100px;

  height: 100vh;
  max-height: 680px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  background: url(${imageBackground}) no-repeat 80% center;
`;

export const Location = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;

  position: absolute;
  right: 0;
  top: 0;

  font-weight: 600;
  font-size: 24px;
  line-height: 34px;

  strong {
    font-weight: 800;
  }
`;

export const EnterApp = styled.a`
  position: absolute;
  bottom: 0;
  right: 0;

  width: 80px;
  height: 80px;

  background: #FFD666;
  color: #8D734B;
  border-radius: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.2s;

  &:hover {
    background: #96FEFF;
    color: #15C3D6;
  }
`;

export const Main = styled.main`
  max-width: 350px;
  max-height: 500px;

  h1 {
    font-size: 76px;
    font-weight: 900;
    line-height: 70px;
  }

  p {
    margin-top: 40px;
    max-height: 68px;
    font-size: 24px;
    line-height: 34px;
    font-weight: 600;
  }

`;
