import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [tema, setTema] = useState('dark'); // inicia sempre no dark

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', tema);
  }, [tema]);

  function alternarTema() {
    setTema((anterior) => (anterior === 'dark' ? 'light' : 'dark'));
  }

  return (
    <ThemeContext.Provider value={{ tema, alternarTema }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
