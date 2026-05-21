import { useState } from 'react';
import { useDados } from '../context/DadosContext';
import { useNavigate } from 'react-router-dom';

export default function AlunoForm() {
  const { turmas, adicionarAluno } = useDados();
  const navegar = useNavigate();

  const [form, setForm] = useState({ nome: '', turmaId: '', unidade: '', status: 'Não Contatado', motivo: '', observacoes: '', contratoAnual: false });
  const [erros, setErros] = useState({});

  function validar() {
    const e = {};
    if (!form.nome || form.nome.length < 3) e.nome = 'Informe o nome do aluno (mín. 3 caracteres).';
    if (!form.turmaId) e.turmaId = 'Selecione a turma.';
    if (!form.unidade) e.unidade = 'Informe a unidade.';
    return e;
  }

  function onSubmit(e) {
    e.preventDefault();
    const v = validar();
    setErros(v);
    if (Object.keys(v).length) return;
    adicionarAluno({ ...form, turmaId: Number(form.turmaId) });
    navegar('/alunos');
  }

  return (
    <div>
      <h1>Novo aluno</h1>
      <form onSubmit={onSubmit} style={{ marginTop: 12, maxWidth: 720 }}>
        <div className="campo">
          <label className="campo__label">Nome</label>
          <input className={`campo__input ${erros.nome ? 'campo__input--erro' : ''}`} value={form.nome} onChange={e => setForm(f => ({ ...f, nome: e.target.value }))} />
          {erros.nome && <div className="campo__erro">{erros.nome}</div>}
        </div>

        <div className="campo">
          <label className="campo__label">Turma</label>
          <select className={`campo__select ${erros.turmaId ? 'campo__input--erro' : ''}`} value={form.turmaId} onChange={e => setForm(f => ({ ...f, turmaId: e.target.value }))}>
            <option value="">-- selecione --</option>
            {turmas.map(t => <option key={t.id} value={t.id}>{t.nome} — {t.unidade}</option>)}
          </select>
          {erros.turmaId && <div className="campo__erro">{erros.turmaId}</div>}
        </div>

        <div className="campo">
          <label className="campo__label">Unidade</label>
          <input className={`campo__input ${erros.unidade ? 'campo__input--erro' : ''}`} value={form.unidade} onChange={e => setForm(f => ({ ...f, unidade: e.target.value }))} />
          {erros.unidade && <div className="campo__erro">{erros.unidade}</div>}
        </div>

        <div className="campo">
          <label className="campo__label">Status</label>
          <select className="campo__select" value={form.status} onChange={e => setForm(f => ({ ...f, status: e.target.value }))}>
            <option>Não Contatado</option>
            <option>Contatado</option>
            <option>Rematriculado</option>
            <option>Não Volta</option>
          </select>
        </div>

        <div className="campo">
          <label className="campo__label">Motivo</label>
          <input className="campo__input" value={form.motivo} onChange={e => setForm(f => ({ ...f, motivo: e.target.value }))} />
        </div>

        <div className="campo">
          <label className="campo__label">Observações</label>
          <textarea className="campo__textarea" value={form.observacoes} onChange={e => setForm(f => ({ ...f, observacoes: e.target.value }))} />
        </div>

        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <input type="checkbox" checked={form.contratoAnual} onChange={e => setForm(f => ({ ...f, contratoAnual: e.target.checked }))} /> Contrato anual
          </label>
        </div>

        <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
          <button className="botao botao--primario" type="submit">Salvar</button>
          <button className="botao botao--secundario" type="button" onClick={() => navegar('/alunos')}>Cancelar</button>
        </div>
      </form>
    </div>
  );
}
