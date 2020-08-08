import React, { FC, useCallback } from 'react';

import whatsappIcon from '../../assets/icons/whatsapp.svg';
import { IInfosClasses } from '../../pages/TeacherList';

import { Container } from './styles';
import api from '../../services/api';

interface ITeacherItem {
  teacher: IInfosClasses
}

const Teacher: FC<ITeacherItem> = ({ teacher }) => {
  const handleCreateNewConnection = useCallback(() => {
    api.post('connections', {
      user_id: teacher.id,
    });
  }, [teacher]);

  return (
    <Container>
      <header>
        <img src={teacher.avatar} alt={teacher.name} />

        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>{teacher.bio}</p>

      <footer>
        <p>
          Preço:
          <strong>R$ {teacher.cost}</strong>
        </p>
        <a
          target="_blank"
          rel="noreferrer noopener"
          onClick={handleCreateNewConnection}
          href={`https://wa.me/${teacher.whatsapp}`}
        >
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </Container>
  );
};

export default Teacher;
