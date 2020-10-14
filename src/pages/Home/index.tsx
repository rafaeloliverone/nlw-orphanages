import React from 'react';
import { FiArrowRight } from 'react-icons/fi'

import { Container, Content, Location, EnterApp, Main } from './styles'

import logoImg from '../../assets/logo.svg';

const Home: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Happy"></img>

        <Main>
          <h1>Leve felicidade para o mundo </h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </Main>

        <Location>
          <strong>Paraíba</strong>
          <span>João Pessoa</span>
        </Location>


        <EnterApp>
         <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </EnterApp>
      </Content>
    </Container>
  );
}

export default Home;
