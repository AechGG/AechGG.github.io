import { useState } from 'react';

export const themeObject = (initTheme) => {
  return {
    palette: {
      type: initTheme,
      primary: {
        main: '#fff',
      },
      secondary: {
        main: '#000000',
      },
    },
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
  };
};

export const useDarkMode = (themeType) => {
  const [theme, setTheme] = useState(themeObject(themeType));

  const {
    palette: { type },
  } = theme;

  const toggleDarkMode = () => {
    const updatedTheme = {
      ...theme,
      palette: {
        ...theme.palette,
        type: type === 'light' ? 'dark' : 'light',
      },
    };
    setTheme(updatedTheme);
  };

  return [theme, toggleDarkMode];
};
