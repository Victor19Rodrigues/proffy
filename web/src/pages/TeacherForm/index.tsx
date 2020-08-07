import React, { FC } from 'react';

import Container from '../../components/Container';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import { Main, TitleForm, Footer } from '../TeacherForm/styles';

import warningIcon from '../../assets/icons/warning.svg';

const TeacherForm: FC = () => {
  return (
    <Container page="form">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <Main>
        <fieldset>
          <TitleForm>Seus dados</TitleForm>

          <Input name="name" label="Nome completo" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="WhatsApp" />

        </fieldset>

        <fieldset>
          <TitleForm>Sobre a aula</TitleForm>

          <Input name="subject" label="Matéria" />
          <Input name="cost" label="Custo da sua hora por aula" />

        </fieldset>

        <Footer>
          <p>
            <img src={warningIcon} alt="Aviso importante" />
            Importante! <br />
            Preecha todos os dados
          </p>
          <button type="button">
            Salvar cadastro
          </button>
        </Footer>
      </Main>
    </Container>
  );
};

export default TeacherForm;
