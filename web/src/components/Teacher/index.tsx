import React from 'react';

import whatsappIcon from '../../assets/icons/whatsapp.svg';

import { Container } from './styles';

const Teacher: React.FC = () => {
  return (
    <Container>
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/20098968?s=460&u=db2ae0cd1d9f3d84b5ba9ef25319371f683005cb&v=4"
          alt="Victor Rodrigues da Silva"
        />

        <div>
          <strong>Victor Rodrigues da Silva</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de matemática avançada.
        <br />
        <br />
        Apaixonado por explodir coisas em laboratório e por mudar a vida das
        pessoas através de experiências.
      </p>

      <footer>
        <p>
          Preço:
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </Container>
  );
};

export default Teacher;
