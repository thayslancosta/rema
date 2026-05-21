import { useEffect, useMemo, useState } from 'react';
import { useDados } from '../context/DadosContext';
import AlunoCard from '../components/AlunoCard';
import { Link } from 'react-router-dom';

export default function Alunos() {
  const { alunos, turmas } = useDados();
  const [loading, setLoading] = useState(true);
  const [erro] = useState(null);
  const [q, setQ] = useState('');
  const [statusFiltro, setStatusFiltro] = useState('Todos');

  useEffect(() => { setLoading(true); const t = setTimeout(() => setLoading(false), 400); return () => clearTimeout(t); }, []);

  const lista = useMemo(() => {
    return alunos.filter(a => {
      if (statusFiltro !== 'Todos' && a.status !== statusFiltro) return false;
      if (q && !a.nome.toLowerCase().includes(q.toLowerCase())) return false;
      return true;
    });
  }, [alunos, q, statusFiltro]);

  function nomeTurma(id) { const t = turmas.find(x => x.id === id); return t ? t.nome : '—'; }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Alunos</h1>
        <div style={{ display: 'flex', gap: 8 }}>
          <Link to="/alunos/novo" className="botao botao--primario">Novo aluno</Link>
        </div>
      </div>

      <div style={{ marginTop: 12, marginBottom: 12, display: 'flex', gap: 8 }}>
        <input placeholder="Buscar por nome" value={q} onChange={e => setQ(e.target.value)} className="campo__input" style={{ width: 240 }} />
        <select value={statusFiltro} onChange={e => setStatusFiltro(e.target.value)} className="campo__select">
          <option>Todos</option>
          <option>Não Contatado</option>
          <option>Contatado</option>
          <option>Rematriculado</option>
          <option>Não Volta</option>
        </select>
      </div>

      {loading ? <p>Carregando...</p> : erro ? <p className="campo__erro">{erro}</p> : (
        lista.length === 0 ? <p>Nenhum aluno encontrado.</p> : (
          <div className="lista-cards">
            {lista.map(a => <AlunoCard key={a.id} aluno={a} nomeTurma={nomeTurma(a.turmaId)} />)}
          </div>
        )
      )}
    </div>
  );
}
