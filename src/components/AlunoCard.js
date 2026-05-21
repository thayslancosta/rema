import StatusBadge from './StatusBadge';

export default function AlunoCard({ aluno, nomeTurma }) {
  return (
    <div className="cartao aluno-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontWeight: 600 }}>{aluno.nome}</div>
          <div style={{ color: 'var(--cor-texto-suave)', fontSize: '0.95rem' }}>{nomeTurma} • {aluno.unidade}</div>
        </div>
        <div>
          <StatusBadge status={aluno.status} />
        </div>
      </div>
    </div>
  );
}
