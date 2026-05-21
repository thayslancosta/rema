import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import ThemeToggle from './ThemeToggle';
import './navbar.css';

export default function Navbar() {
  const { sair } = useAuth();
  const navegar = useNavigate();

  function aoSair() {
    sair();
    navegar('/login');
  }

  return (
    <nav className="navbar">
      <div className="navbar__marca">ReMatrícula</div>
      <div className="navbar__links">
        <NavLink to="/" end className="navbar__link">Dashboard</NavLink>
        <NavLink to="/alunos" className="navbar__link">Alunos</NavLink>
        <NavLink to="/turmas" className="navbar__link">Turmas</NavLink>
      </div>
      <div className="navbar__acoes">
        <ThemeToggle />
        <button className="botao botao--secundario" onClick={aoSair}>Sair</button>
      </div>
    </nav>
  );
}
