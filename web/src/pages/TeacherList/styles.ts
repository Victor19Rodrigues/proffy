import styled from 'styled-components';

export const Form = styled.form`
  margin-top: 3.2rem;

  label {
    color: var(--color-text-in-primary);
  }

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 16px;

    position: absolute;
    bottom: -28px;
  }
`;

export const Main = styled.main`
  width: 90%;
  margin: 3.2rem auto;

  @media (min-width: 700px) {
    padding: 3.2rem 0;
    max-width: 740px;
    margin: 0 auto;
  }
`;
