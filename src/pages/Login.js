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

  function onSubmit(e) {
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
    }, 600);
  }

  const erros = tentou ? validar() : {};

  return (
    <div className="login">
      <aside className="login__aside">
        <div className="login__aside-conteudo">
          <div className="kicker">— VISÃO GERAL</div>
          <h1 style={{ marginTop: 12 }}>ReMatrícula <em>sistema</em></h1>
          <p style={{ marginTop: 12, color: 'var(--cor-texto-suave)' }}>Painel de acompanhamento de rematrículas — visualize turmas, alunos e status.</p>
        </div>
        <div className="login__textura" aria-hidden="true" />
      </aside>

      <main className="login__main">
        <div className="login__form cartao surgir surgir-1">
          <h2 style={{ marginBottom: 6 }}>Entrar</h2>
          <p style={{ color: 'var(--cor-texto-suave)', marginBottom: 12 }}>Acesso de teste: professor@yazigi.com / 123456</p>

          <form onSubmit={onSubmit}>
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

            <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
              <button className="botao botao--primario" type="submit" disabled={carregando}>{carregando ? 'Entrando...' : 'Entrar'}</button>
              <button type="button" className="botao botao--secundario" onClick={() => { setEmail('professor@yazigi.com'); setSenha('123456'); }}>Usar credencial de teste</button>
            </div>
          </form>
        </div>
      </main>

      <style>{`
        .login { min-height: 100vh; display: grid; grid-template-columns: 1.05fr 1fr; }
        .login__aside { padding: 48px 36px; background: linear-gradient(180deg, rgba(255,255,255,0.02), transparent); display:flex; flex-direction:column; justify-content:space-between; }
        .login__aside-conteudo { max-width: 520px; }
        .login__main { display:flex; align-items:center; justify-content:center; padding: 48px 32px; }
        .login__form { width: 100%; max-width: 420px; }
        @media (max-width: 900px) { .login { grid-template-columns: 1fr; } .login__aside { display:none; } }
      `}</style>
    </div>
  );
}
