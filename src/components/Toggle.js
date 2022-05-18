import React, { useContext, useRef } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import './Toggle.css';

const Toggle = () => {
  const { darkMode, theme, toggleDarkMode } = useContext(ThemeContext);

  const ref1 = useRef(null);

  const toggleBg = darkMode
    ? {
        backgroundImage: `linear-gradient(${theme.toggle.from}, ${theme.toggle.to})`,
      }
    : { backgroundColor: theme.toggle };

  const toggleSwitchBg = {
    backgroundColor: theme.bg,
  };

  const onToggleClicked = () => {
    if (ref1 !== null) {
      ref1.current.style.left = darkMode ? '2rem' : '0.2rem';
    }

    toggleDarkMode();
  };

  return (
    <div className="toggle-wrapper">
      <p className="toggle-text">Dark Mode</p>
      <div style={toggleBg} onClick={onToggleClicked} className={'toggle'}>
        <div ref={ref1} style={toggleSwitchBg} className="toggle-switch" />
      </div>
    </div>
  );
};

export default Toggle;
