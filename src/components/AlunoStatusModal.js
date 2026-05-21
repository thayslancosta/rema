import { useState, useEffect } from 'react';
import { useDados } from '../context/DadosContext';

const STATUS = ['Não Contatado', 'Contatado', 'Rematriculado', 'Não Volta'];

export default function AlunoStatusModal({ aluno, aoFechar }) {
  const { atualizarAluno } = useDados();
  const [status, setStatus] = useState(aluno.status);
  const [observacoes, setObservacoes] = useState(aluno.observacoes || '');

  // Fecha com ESC
  useEffect(() => {
    function aoTeclar(e) { if (e.key === 'Escape') aoFechar(); }
    document.addEventListener('keydown', aoTeclar);
    return () => document.removeEventListener('keydown', aoTeclar);
  }, [aoFechar]);

  function salvar() {
    atualizarAluno(aluno.id, { status, observacoes });
    aoFechar();
  }

  return (
    <div className="modal-fundo" onClick={aoFechar} role="dialog" aria-modal="true">
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="modal__titulo">Atualizar aluno</div>
        <div className="modal__sub">{aluno.nome}</div>

        <div className="campo">
          <label className="campo__label">Status</label>
          <div className="status-opcoes">
            {STATUS.map(s => (
              <button
                key={s}
                type="button"
                className={`status-opcao ${status === s ? 'status-opcao--ativa' : ''}`}
                data-status={s}
                onClick={() => setStatus(s)}
              >
                <span className="status-opcao__ponto" />
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="campo">
          <label className="campo__label">Observações</label>
          <textarea
            className="campo__textarea"
            placeholder="Anote o que foi combinado no contato…"
            value={observacoes}
            onChange={e => setObservacoes(e.target.value)}
            autoFocus
          />
        </div>

        <div className="modal__acoes">
          <button className="botao botao--secundario botao--pequeno" onClick={aoFechar}>Cancelar</button>
          <button className="botao botao--primario botao--pequeno" onClick={salvar}>Salvar alterações</button>
        </div>
      </div>

      <style>{`
        .status-opcoes { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
        .status-opcao {
          display: flex; align-items: center; gap: 8px; cursor: pointer;
          padding: 10px 12px; border-radius: var(--raio); text-align: left;
          background: var(--cor-superficie); border: 1.5px solid var(--cor-borda);
          color: var(--cor-texto); font-weight: 500; font-size: 0.86rem; transition: var(--transicao);
        }
        .status-opcao:hover { border-color: var(--cor-borda-forte); }
        .status-opcao__ponto { width: 9px; height: 9px; border-radius: 999px; flex: none; background: var(--cor-texto-suave); }
        .status-opcao[data-status="Não Contatado"] .status-opcao__ponto { background: var(--status-nao-contatado); }
        .status-opcao[data-status="Contatado"] .status-opcao__ponto { background: var(--status-contatado); }
        .status-opcao[data-status="Rematriculado"] .status-opcao__ponto { background: var(--status-rematriculado); }
        .status-opcao[data-status="Não Volta"] .status-opcao__ponto { background: var(--status-nao-volta); }
        .status-opcao--ativa { border-color: var(--cor-marca); background: var(--cor-marca-suave); color: var(--cor-titulo); font-weight: 600; }
      `}</style>
    </div>
  );
}
