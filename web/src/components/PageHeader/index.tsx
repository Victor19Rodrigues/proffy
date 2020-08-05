import React, { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';

import { useTheme } from '../../hooks/theme';

import logo from '../../assets/logo.svg';
import bachIcon from '../../assets/icons/back.svg';

import { Header, TopBar, HeaderContent } from './styles';

interface IProps {
  title: string;
}

const PageHeader: FC<IProps> = ({ title, children }) => {
  const {
    title: themeTitle,
    colors: { colorBackground },
  } = useContext(ThemeContext);

  const { toggleTheme } = useTheme();
  return (
    <Header>
      <TopBar>
        <Link to="/">
          <img src={bachIcon} alt="Back" />
        </Link>

        <div className="right-content--header">
          <img src={logo} alt="Logo" />
          <Switch
            checked={themeTitle === 'dark'}
            onChange={toggleTheme}
            checkedIcon={false}
            uncheckedIcon={false}
            className="toggle"
            height={15}
            width={50}
            handleDiameter={20}
            offColor={colorBackground}
            onColor={colorBackground}
          />
        </div>
      </TopBar>

      <HeaderContent>
        <strong>{title}</strong>

        {children}
      </HeaderContent>
    </Header>
  );
};

export default PageHeader;
