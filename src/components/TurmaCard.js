import { Link } from 'react-router-dom';

export default function TurmaCard({ turma, resumo }) {
  return (
    <Link to={`/turmas/${turma.id}`} className="turma-card cartao" aria-label={`Turma ${turma.nome}`}>
      <div className="turma-card__nivel" style={{ fontSize: '0.78rem', color: 'var(--cor-texto-suave)', marginBottom: 6 }}>{turma.nivel || '—'}</div>
      <h3 className="turma-card__nome" style={{ margin: 0 }}>{turma.nome}</h3>
      <div className="turma-card__meta" style={{ marginTop: 8, color: 'var(--cor-texto-suave)', fontSize: '0.92rem' }}>
        {turma.diaHorario && <span style={{ marginRight: 8 }}>{turma.diaHorario}</span>}
        <span>{turma.unidade}</span>
      </div>

      {resumo ? (
        <div className="turma-card__resumo" style={{ marginTop: 12, color: 'var(--cor-texto-suave)', fontSize: '0.9rem' }}>{resumo}</div>
      ) : (
        <span className="turma-card__seta turma-card__seta--solo" aria-hidden="true">→</span>
      )}

      <style>{`
        .turma-card { display: flex; flex-direction: column; gap: 8px; overflow: hidden; text-decoration: none; }
        .turma-card__nome { font-size: 1.05rem; font-weight: 600; }
        .turma-card__meta { display: flex; gap: 8px; align-items: center; }
        .turma-card__resumo { margin-top: 8px; }
        .turma-card__seta--solo { align-self: flex-end; margin-top: 4px; font-size: 1.1rem; }
      `}</style>
    </Link>
  );
}
