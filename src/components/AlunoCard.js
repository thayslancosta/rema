import StatusBadge from './StatusBadge';

export default function AlunoCard({ aluno, nomeTurma }) {
  const inicial = (aluno.nome || '?').trim().charAt(0).toUpperCase();

  return (
    <article className="aluno-card cartao">
      <div className="aluno-card__topo" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <div className="aluno-card__avatar" aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, background: 'var(--cor-superficie-2)', color: 'var(--cor-texto)' }}>{inicial}</div>
          <div>
            <div style={{ fontWeight: 700 }}>{aluno.nome}</div>
            <div style={{ color: 'var(--cor-texto-suave)', fontSize: '0.92rem' }}>{nomeTurma} • {aluno.unidade}</div>
          </div>
        </div>

        <div>
          <StatusBadge status={aluno.status} />
        </div>
      </div>

      {aluno.observacoes && <p className="aluno-card__obs" style={{ marginTop: 10, color: 'var(--cor-texto-suave)' }}>{aluno.observacoes}</p>}

      {aluno.contratoAnual && <span className="aluno-card__tag" style={{ marginTop: 8, display: 'inline-block', padding: '6px 10px', borderRadius: 999, background: 'rgba(0,0,0,0.04)', fontWeight: 600 }}>Contrato anual</span>}

      <style>{`
        .aluno-card { display: flex; flex-direction: column; gap: 14px; }
        .aluno-card__avatar { font-size: 1.05rem; }
        .aluno-card__obs { margin: 0; }
      `}</style>
    </article>
  );
}
