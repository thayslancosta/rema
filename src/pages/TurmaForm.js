import { useState } from 'react';
import { useDados } from '../context/DadosContext';
import { useNavigate } from 'react-router-dom';

export default function TurmaForm() {
  const { adicionarTurma } = useDados();
  const navegar = useNavigate();

  const [form, setForm] = useState({ nome: '', nivel: '', diaHorario: '', unidade: '', campanha: '' });
  const [erros, setErros] = useState({});

  function validar() {
    const e = {};
    if (!form.nome || form.nome.length < 3) e.nome = 'Informe o nome da turma (mín. 3).';
    if (!form.nivel) e.nivel = 'Informe o nível.';
    if (!form.unidade) e.unidade = 'Informe a unidade.';
    return e;
  }

  function onSubmit(e) {
    e.preventDefault();
    const v = validar();
    setErros(v);
    if (Object.keys(v).length) return;
    adicionarTurma(form);
    navegar('/turmas');
  }

  return (
    <div style={{ maxWidth: 720, margin: '0 auto' }}>
      <h1>Nova turma</h1>
      <form onSubmit={onSubmit} style={{ marginTop: 12 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <div className="campo">
            <label className="campo__label">Nome</label>
            <input className={`campo__input ${erros.nome ? 'campo__input--erro' : ''}`} value={form.nome} onChange={e => setForm(f => ({ ...f, nome: e.target.value }))} />
            {erros.nome && <div className="campo__erro">{erros.nome}</div>}
          </div>

          <div className="campo">
            <label className="campo__label">Nível</label>
            <input className={`campo__input ${erros.nivel ? 'campo__input--erro' : ''}`} value={form.nivel} onChange={e => setForm(f => ({ ...f, nivel: e.target.value }))} />
            {erros.nivel && <div className="campo__erro">{erros.nivel}</div>}
          </div>

          <div className="campo">
            <label className="campo__label">Dia / Horário</label>
            <input className="campo__input" value={form.diaHorario} onChange={e => setForm(f => ({ ...f, diaHorario: e.target.value }))} />
          </div>

          <div className="campo">
            <label className="campo__label">Unidade</label>
            <input className={`campo__input ${erros.unidade ? 'campo__input--erro' : ''}`} value={form.unidade} onChange={e => setForm(f => ({ ...f, unidade: e.target.value }))} />
            {erros.unidade && <div className="campo__erro">{erros.unidade}</div>}
          </div>
        </div>

        <div className="campo">
          <label className="campo__label">Campanha</label>
          <input className="campo__input" value={form.campanha} onChange={e => setForm(f => ({ ...f, campanha: e.target.value }))} />
        </div>

        <div style={{ display: 'flex', gap: 8 }}>
          <button className="botao botao--primario" type="submit">Salvar</button>
          <button className="botao botao--secundario" type="button" onClick={() => navegar('/turmas')}>Cancelar</button>
        </div>
      </form>
    </div>
  );
}
