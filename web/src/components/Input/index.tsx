import React, { FC, InputHTMLAttributes } from 'react';

import { InputWrapper } from './styles';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input: FC<IProps> = ({ label, name, ...rest }) => {
  return (
    <InputWrapper>
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name}  {...rest} />
    </InputWrapper>
  );
}

export default Input;
