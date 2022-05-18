import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Toggle from './Toggle';
import './Header.css';
import Divider from './UI/Divider';

const Header = () => {
  const { theme } = useContext(ThemeContext);

  const headerBg = { backgroundColor: theme.topBg };

  return (
    <div className="header" style={headerBg}>
      <div className="header-left">
        <h1 style={{ color: theme.textPrimary }}>Social Media Dashboard</h1>
        <h3 style={{ color: theme.textSecondary }}>Total Followers: 23,004</h3>
      </div>
      <Divider />
      <div className="header-right">
        <Toggle />
      </div>
    </div>
  );
};

export default Header;
