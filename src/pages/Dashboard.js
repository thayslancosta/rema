import { useDados } from '../context/DadosContext';
import StatCard from '../components/StatCard';
import TurmaCard from '../components/TurmaCard';

export default function Dashboard() {
  const { alunos, turmas } = useDados();

  const total = alunos.length;
  const rematriculados = alunos.filter(a => a.status === 'Rematriculado').length;
  const contatados = alunos.filter(a => a.status === 'Contatado').length;
  const naoContatados = alunos.filter(a => a.status === 'Não Contatado').length;
  const naoVolta = alunos.filter(a => a.status === 'Não Volta').length;

  const pct = (n) => (total ? Math.round((n / total) * 100) : 0);

  return (
    <div>
      <h1>Dashboard</h1>
      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', marginTop: 12 }}>
        <StatCard titulo="Total de alunos" valor={total} />
        <StatCard titulo="Rematriculados" valor={rematriculados} porcentagem={pct(rematriculados)} cor="var(--status-rematriculado)" />
        <StatCard titulo="Contatados" valor={contatados} porcentagem={pct(contatados)} cor="var(--status-contatado)" />
        <StatCard titulo="Não Contatados" valor={naoContatados} porcentagem={pct(naoContatados)} cor="var(--status-nao-contatado)" />
        <StatCard titulo="Não Volta" valor={naoVolta} porcentagem={pct(naoVolta)} cor="var(--status-nao-volta)" />
        <StatCard titulo="Total de turmas" valor={turmas.length} />
      </div>

      <h2 style={{ marginTop: 20 }}>Turmas</h2>
      <div className="lista-cards" style={{ marginTop: 12 }}>
        {turmas.map(t => {
          const alunosDaTurma = alunos.filter(a => a.turmaId === t.id);
          const rem = alunosDaTurma.filter(a => a.status === 'Rematriculado').length;
          const resumo = `${rem}/${alunosDaTurma.length} rematriculados`;
          return <TurmaCard key={t.id} turma={t} resumo={resumo} />;
        })}
      </div>
    </div>
  );
}
