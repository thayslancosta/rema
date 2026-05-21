export default function StatCard({ titulo, valor, porcentagem, cor }) {
  const pct = typeof porcentagem === 'number' ? porcentagem : null;
  return (
    <div className="stat-card cartao">
      <div className="stat-card__titulo" style={{ color: 'var(--cor-texto-suave)', fontSize: '0.95rem' }}>{titulo}</div>
      <div className="stat-card__linha" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 8 }}>
        <span className="stat-card__valor tnum" style={{ fontSize: '1.4rem', fontWeight: 700, color: cor || 'inherit' }}>{valor}</span>
        {pct != null && <span className="stat-card__pct tnum" style={{ color: 'var(--cor-texto-suave)' }}>{pct}%</span>}
      </div>

      {pct != null && (
        <div className="stat-card__barra" style={{ marginTop: 10, height: 10, background: 'var(--cor-superficie-2)', borderRadius: 999, overflow: 'hidden' }}>
          <span style={{ display: 'block', height: '100%', width: `${Math.max(0, Math.min(100, pct))}%`, background: cor || 'var(--cor-marca)', borderRadius: 999 }} />
        </div>
      )}

      <style>{`
        .stat-card { display: flex; flex-direction: column; gap: 6px; }
      `}</style>
    </div>
  );
}
