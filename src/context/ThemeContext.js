import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const theme = {
  darkTheme: {
    toggle: {
      from: 'hsl(210, 78%, 56%)',
      to: 'hsl(146, 68%, 55%)',
    },
    bg: 'hsl(230, 17%, 14%)',
    topBg: 'hsl(232, 19%, 15%)',
    cardBg: 'hsl(228, 28%, 20%)',
    textPrimary: 'hsl(0, 0%, 100%)',
    textSecondary: 'hsl(228, 34%, 66%)',
  },

  lightTheme: {
    toggle: 'hsl(230, 22%, 74%)',
    bg: 'hsl(0, 0%, 100%)',
    topBg: 'hsl(225, 100%, 98%)',
    cardBg: 'hsl(227, 47%, 96%)',
    textPrimary: 'hsl(230, 17%, 14%)',
    textSecondary: 'hsl(228, 12%, 44%)',
  },
};

export const ThemeProvider = (props) => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        theme: darkMode ? theme.darkTheme : theme.lightTheme,
        toggleDarkMode,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};
