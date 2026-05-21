import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 24 }}>
      <div className="surgir surgir-1">
        <h1>404 — Não encontrado</h1>
        <p style={{ color: 'var(--cor-texto-suave)', marginTop: 8 }}>A página que você procura não existe.</p>
        <div style={{ marginTop: 12 }}>
          <Link to="/" className="botao botao--primario">Voltar para o início</Link>
        </div>
      </div>
    </div>
  );
}
