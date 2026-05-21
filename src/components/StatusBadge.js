const SLUG = {
  'Rematriculado': 'rematriculado',
  'Contatado': 'contatado',
  'Não Contatado': 'nao-contatado',
  'Não Volta': 'nao-volta',
};

export default function StatusBadge({ status }) {
  const slug = SLUG[status] || 'nao-contatado';
  return <span className={`badge badge--${slug}`}>{status}</span>;
}
