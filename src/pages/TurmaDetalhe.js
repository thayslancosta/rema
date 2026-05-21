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
    <div className="cartao" style={{ textAlign: 'center', padding: 56 }}>
      <h1>Turma não encontrada</h1>
      <p style={{ color: 'var(--cor-texto-suave)' }}>A turma solicitada não existe ou foi removida.</p>
      <Link to="/turmas" className="botao botao--primario" style={{ marginTop: 12 }}>Voltar para turmas</Link>
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
      <div className="pagina-topo">
        <div>
          <div className="kicker">— TURMA</div>
          <h1>{turma.nome}</h1>
          <div className="pagina-topo__sub">{turma.nivel} • {turma.diaHorario} • {turma.unidade}</div>
        </div>
        <div>
          <button className="botao botao--secundario" onClick={() => navegar(-1)}>Voltar</button>
        </div>
      </div>

      <div style={{ marginTop: 16 }}>
        <div className="cartao">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontWeight: 700 }}>Total de alunos</div>
              <div style={{ color: 'var(--cor-texto-suave)' }}>{total}</div>
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              {contagens.map(c => (
                <div key={c.k} style={{ textAlign: 'center' }}>
                  <StatusBadge status={c.k} />
                  <div style={{ color: 'var(--cor-texto-suave)' }}>{c.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 12 }}>
        <h2>Alunos da turma</h2>
        {alunosDaTurma.length === 0 ? <div className="cartao" style={{ padding: 28 }}>Nenhum aluno nesta turma.</div> : (
          <div className="lista-cards" style={{ marginTop: 8 }}>
            {alunosDaTurma.map(a => <AlunoCard key={a.id} aluno={a} nomeTurma={turma.nome} />)}
          </div>
        )}
      </div>
    </div>
  );
}
