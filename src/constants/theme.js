import { useState } from 'react';

export const themeObject = (initTheme) => {
  return {
    palette: {
      type: initTheme,
      primary: {
        main: '#1976d2',
      },
      secondary: {
        main: '#000000',
      },
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
