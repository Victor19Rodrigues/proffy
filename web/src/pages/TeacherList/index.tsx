import React, { FC } from 'react';

import Container from '../../components/Container';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Teacher from '../../components/Teacher';

import { Form, Main } from './styles';

const TeacherList: FC = () => {
  return (
    <Container page="teacher-list">
      <PageHeader title="Estes são os proffys disponíveis.">
        <Form>
          <Input name="subject" label="Matéria" />
          <Input name="week-day" label="Dia da semana" />
          <Input name="time" label="Hora" type="time" />
        </Form>
      </PageHeader>

      <Main>
        <Teacher />
        <Teacher />
        <Teacher />
      </Main>
    </Container>
  );
};

export default TeacherList;

/// 37 minutos
// verificar bordar do perfil

