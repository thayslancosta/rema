import { useEffect, useState } from 'react';
import { useDados } from '../context/DadosContext';
import TurmaCard from '../components/TurmaCard';
import { Link } from 'react-router-dom';

export default function Turmas() {
  const { turmas } = useDados();
  const [loading, setLoading] = useState(true);

  useEffect(() => { setLoading(true); const t = setTimeout(() => setLoading(false), 400); return () => clearTimeout(t); }, []);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Turmas</h1>
        <Link to="/turmas/novo" className="botao botao--primario">Nova turma</Link>
      </div>

      {loading ? <p>Carregando...</p> : (
        <div className="lista-cards" style={{ marginTop: 12 }}>
          {turmas.map(t => <TurmaCard key={t.id} turma={t} />)}
        </div>
      )}
    </div>
  );
}
