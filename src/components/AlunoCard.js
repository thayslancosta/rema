import { useState } from 'react';
import StatusBadge from './StatusBadge';
import AlunoStatusModal from './AlunoStatusModal';

export default function AlunoCard({ aluno, nomeTurma }) {
  const [editando, setEditando] = useState(false);

  return (
    <article className="aluno-card cartao">
      <div className="aluno-card__cabecalho">
        <div style={{ minWidth: 0 }}>
          <h3 className="aluno-card__nome">{aluno.nome}</h3>
          <div className="aluno-card__turma">{nomeTurma} · {aluno.unidade}</div>
        </div>
        <button
          className="aluno-card__editar"
          onClick={() => setEditando(true)}
          aria-label={`Alterar status de ${aluno.nome}`}
          title="Alterar status e observações"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/>
          </svg>
        </button>
      </div>

      <StatusBadge status={aluno.status} />

      {aluno.observacoes && <p className="aluno-card__obs">{aluno.observacoes}</p>}

      {aluno.contratoAnual && <span className="aluno-card__tag">Contrato anual</span>}

      {editando && (
        <AlunoStatusModal aluno={aluno} aoFechar={() => setEditando(false)} />
      )}

      <style>{`
        .aluno-card { display: flex; flex-direction: column; gap: 14px; }
        .aluno-card:hover { transform: translateY(-3px); box-shadow: var(--sombra); border-color: var(--cor-borda-forte); }
        .aluno-card__cabecalho { display: flex; gap: 12px; align-items: flex-start; justify-content: space-between; }
        .aluno-card__nome { font-size: 1.08rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .aluno-card__turma { font-size: 0.82rem; color: var(--cor-texto-suave); margin-top: 3px; }
        .aluno-card__editar {
          flex: none; width: 34px; height: 34px; border-radius: 9px; cursor: pointer;
          display: grid; place-items: center;
          background: transparent; color: var(--cor-texto-suave);
          border: 1.5px solid var(--cor-borda); transition: var(--transicao);
        }
        .aluno-card__editar:hover { color: var(--cor-marca); border-color: var(--cor-marca); background: var(--cor-marca-suave); }
        .aluno-card__obs {
          font-size: 0.86rem; color: var(--cor-texto-suave); line-height: 1.5;
          display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
          padding-top: 12px; border-top: 1px solid var(--cor-borda);
        }
        .aluno-card__tag {
          align-self: flex-start; font-size: 0.74rem; font-weight: 600;
          color: var(--cor-acento); background: color-mix(in srgb, var(--cor-acento) 12%, transparent);
          padding: 3px 9px; border-radius: 6px; letter-spacing: 0.02em;
        }
      `}</style>
    </article>
  );
}
