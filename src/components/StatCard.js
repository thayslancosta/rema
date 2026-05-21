export default function StatCard({ titulo, valor, porcentagem, cor }) {
  return (
    <div className="cartao stat-card">
      <div className="stat-card__titulo">{titulo}</div>
      <div className="stat-card__valor" style={{ marginTop: 8, fontSize: '1.4rem', color: cor || 'inherit' }}>{valor}</div>
      {porcentagem !== undefined && (
        <div className="stat-card__pct" style={{ marginTop: 6, color: 'var(--cor-texto-suave)' }}>{porcentagem}%</div>
      )}
    </div>
  );
}
