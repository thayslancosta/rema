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

  const filtros = ['Todos', 'Não Contatado', 'Contatado', 'Rematriculado', 'Não Volta'];

  return (
    <div>
      <div className="pagina-topo">
        <div>
          <div className="kicker">— ALUNOS</div>
          <h1>Alunos</h1>
          <div className="pagina-topo__sub">Lista de alunos e seus status de rematrícula</div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <Link to="/alunos/novo" className="botao botao--primario">Novo aluno</Link>
        </div>
      </div>

      <div style={{ marginTop: 12, marginBottom: 12, display: 'flex', gap: 8, alignItems: 'center' }}>
        <input placeholder="Buscar por nome" value={q} onChange={e => setQ(e.target.value)} className="campo__input" style={{ width: 280 }} />
        <div style={{ display: 'flex', gap: 8 }}>
          {filtros.map(f => (
            <button key={f} className={`botao ${statusFiltro===f? 'botao--primario' : 'botao--secundario'}`} onClick={() => setStatusFiltro(f)}>{f}</button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="lista-cards">
          {Array.from({ length: 6 }).map((_,i)=> <div key={i} className="cartao skel" style={{ height: 84 }} />)}
        </div>
      ) : erro ? (
        <p className="campo__erro">{erro}</p>
      ) : (
        lista.length === 0 ? (
          <div className="cartao" style={{ textAlign: 'center', padding: 40 }}>Nenhum aluno encontrado.</div>
        ) : (
          <div className="lista-cards">
            {lista.map(a => <AlunoCard key={a.id} aluno={a} nomeTurma={nomeTurma(a.turmaId)} />)}
          </div>
        )
      )}
    </div>
  );
}
