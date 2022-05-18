import React, { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

const App = () => {
  const { theme } = useContext(ThemeContext);

  const wrapperBg = {
    backgroundColor: theme.bg,
  };

  return (
    <div style={wrapperBg} className="wrapper">
      <Header />
      <Main />
    </div>
  );
};

export default App;
