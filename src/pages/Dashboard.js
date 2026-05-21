import { useDados } from '../context/DadosContext';
import StatCard from '../components/StatCard';
import TurmaCard from '../components/TurmaCard';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const { alunos, turmas } = useDados();

  const total = alunos.length;
  const rematriculados = alunos.filter(a => a.status === 'Rematriculado').length;
  const contatados = alunos.filter(a => a.status === 'Contatado').length;
  const naoContatados = alunos.filter(a => a.status === 'Não Contatado').length;
  const naoVolta = alunos.filter(a => a.status === 'Não Volta').length;

  const pct = (n) => (total ? Math.round((n / total) * 100) : 0);
  const taxaRem = pct(rematriculados);

  const metricas = [
    { rotulo: 'Não Contatados', valor: naoContatados, p: pct(naoContatados), cor: 'var(--status-nao-contatado)' },
    { rotulo: 'Contatados', valor: contatados, p: pct(contatados), cor: 'var(--status-contatado)' },
    { rotulo: 'Não Volta', valor: naoVolta, p: pct(naoVolta), cor: 'var(--status-nao-volta)' },
  ];

  return (
    <div>
      <div className="pagina-topo">
        <div>
          <div className="kicker">— VISÃO GERAL</div>
          <h1>Rematrícula <em>painel</em></h1>
          <div className="pagina-topo__sub">Resumo dos dados de rematrícula</div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <Link to="/turmas/novo" className="botao botao--secundario">Nova turma</Link>
          <Link to="/alunos/novo" className="botao botao--primario">Novo aluno</Link>
        </div>
      </div>

      <div className="dash-topo" style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 16 }}>
        <div className="cartao heroi">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ color: 'var(--cor-texto-suave)' }}>Taxa de rematrícula</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
                <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--status-rematriculado)' }}>{taxaRem}%</div>
                <div style={{ color: 'var(--cor-texto-suave)' }}>{rematriculados}/{total} rematriculados</div>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ color: 'var(--cor-texto-suave)' }}>Total de alunos</div>
              <div style={{ fontSize: '1.6rem', fontWeight: 700 }}>{total}</div>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gap: 12 }}>
          {metricas.map(m => <StatCard key={m.rotulo} titulo={m.rotulo} valor={m.valor} porcentagem={m.p} cor={m.cor} />)}
        </div>
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
