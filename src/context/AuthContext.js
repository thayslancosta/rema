import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

const EMAIL_VALIDO = 'professor@yazigi.com';
const SENHA_VALIDA = '123456';

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);

  function entrar(email, senha) {
    if (email === EMAIL_VALIDO && senha === SENHA_VALIDA) {
      setUsuario({ email, nome: 'Professor(a)' });
      return { sucesso: true };
    }
    return { sucesso: false, erro: 'E-mail ou senha inválidos.' };
  }

  function sair() {
    setUsuario(null);
  }

  const autenticado = Boolean(usuario);

  return (
    <AuthContext.Provider value={{ usuario, autenticado, entrar, sair }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
