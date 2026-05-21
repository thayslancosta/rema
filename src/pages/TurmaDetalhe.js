import { useParams, Link, useNavigate } from 'react-router-dom';
import { useDados } from '../context/DadosContext';
import AlunoCard from '../components/AlunoCard';
import StatusBadge from '../components/StatusBadge';

export default function TurmaDetalhe() {
  const { id } = useParams();
  const { turmas, alunos } = useDados();
  const navegar = useNavigate();

  const turma = turmas.find(t => t.id === Number(id));
  if (!turma) return (
    <div>
      <h1>Turma não encontrada</h1>
      <Link to="/turmas">Voltar para turmas</Link>
    </div>
  );

  const alunosDaTurma = alunos.filter(a => a.turmaId === turma.id);
  const total = alunosDaTurma.length;
  const contagens = {
    Rematriculado: alunosDaTurma.filter(a => a.status === 'Rematriculado').length,
    Contatado: alunosDaTurma.filter(a => a.status === 'Contatado').length,
    'Não Contatado': alunosDaTurma.filter(a => a.status === 'Não Contatado').length,
    'Não Volta': alunosDaTurma.filter(a => a.status === 'Não Volta').length,
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1>{turma.nome}</h1>
          <div style={{ color: 'var(--cor-texto-suave)' }}>{turma.nivel} • {turma.diaHorario} • {turma.unidade}</div>
        </div>
        <div>
          <button className="botao botao--secundario" onClick={() => navegar(-1)}>Voltar</button>
        </div>
      </div>

      <div style={{ marginTop: 16 }}>
        <div className="cartao">
          <div>Total de alunos: {total}</div>
          <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
            {Object.entries(contagens).map(([k, v]) => (
              <div key={k} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <StatusBadge status={k} />
                <div style={{ color: 'var(--cor-texto-suave)' }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: 12 }}>
        <h2>Alunos da turma</h2>
        {alunosDaTurma.length === 0 ? <p>Nenhum aluno nesta turma.</p> : (
          <div className="lista-cards" style={{ marginTop: 8 }}>
            {alunosDaTurma.map(a => <AlunoCard key={a.id} aluno={a} nomeTurma={turma.nome} />)}
          </div>
        )}
      </div>
    </div>
  );
}
