import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { tema, alternarTema } = useTheme();
  return (
    <button className="botao botao--secundario" onClick={alternarTema} aria-label="Alternar tema">
      {tema === 'dark' ? '☀️ Claro' : '🌙 Escuro'}
    </button>
  );
}
