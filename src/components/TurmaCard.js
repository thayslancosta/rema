import { Link } from 'react-router-dom';

export default function TurmaCard({ turma, resumo }) {
  return (
    <Link to={`/turmas/${turma.id}`} className="turma-card" style={{ textDecoration: 'none' }}>
      <div className="cartao">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontWeight: 600 }}>{turma.nome}</div>
            <div style={{ color: 'var(--cor-texto-suave)', fontSize: '0.95rem' }}>{turma.nivel} • {turma.diaHorario}</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            {resumo && <div style={{ fontSize: '0.9rem', color: 'var(--cor-texto-suave)' }}>{resumo}</div>}
          </div>
        </div>
      </div>
    </Link>
  );
}
