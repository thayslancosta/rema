import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const { entrar } = useAuth();
  const navegar = useNavigate();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [tentou, setTentou] = useState(false);
  const [carregando, setCarregando] = useState(false);

  function validar() {
    const erros = {};
    if (!email || !email.includes('@')) erros.email = 'Informe um e-mail válido.';
    if (!senha || senha.length < 6) erros.senha = 'Senha deve ter ao menos 6 caracteres.';
    return erros;
  }

  async function onSubmit(e) {
    e.preventDefault();
    setTentou(true);
    setErro('');
    const erros = validar();
    if (Object.keys(erros).length) return;
    setCarregando(true);
    setTimeout(() => {
      const res = entrar(email, senha);
      setCarregando(false);
      if (res.sucesso) {
        navegar('/');
      } else {
        setErro(res.erro || 'Erro ao logar');
      }
    }, 500);
  }

  const erros = tentou ? validar() : {};

  return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="cartao" style={{ width: 420 }}>
        <h1>ReMatrícula</h1>
        <p style={{ color: 'var(--cor-texto-suave)', marginTop: 6 }}>Sistema de rematrícula</p>

        <form onSubmit={onSubmit} style={{ marginTop: 16 }}>
          <div className="campo">
            <label className="campo__label">E-mail</label>
            <input className={`campo__input ${erros.email ? 'campo__input--erro' : ''}`} value={email} onChange={e => setEmail(e.target.value)} />
            {erros.email && <div className="campo__erro">{erros.email}</div>}
          </div>

          <div className="campo">
            <label className="campo__label">Senha</label>
            <input type="password" className={`campo__input ${erros.senha ? 'campo__input--erro' : ''}`} value={senha} onChange={e => setSenha(e.target.value)} />
            {erros.senha && <div className="campo__erro">{erros.senha}</div>}
          </div>

          {erro && <div className="campo__erro">{erro}</div>}

          <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
            <button className="botao botao--primario" type="submit" disabled={carregando}>{carregando ? 'Entrando...' : 'Entrar'}</button>
            <button type="button" className="botao botao--secundario" onClick={() => { setEmail('professor@yazigi.com'); setSenha('123456'); }}>Usar credencial de teste</button>
          </div>
        </form>

        <p style={{ marginTop: 12, color: 'var(--cor-texto-suave)', fontSize: '0.9rem' }}>Acesso de teste: professor@yazigi.com / 123456</p>
      </div>
    </div>
  );
}
