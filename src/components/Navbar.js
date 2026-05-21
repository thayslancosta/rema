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
        <NavLink to="/" end className={({ isActive }) => `navbar__link${isActive ? ' active' : ''}`}>Dashboard</NavLink>
        <NavLink to="/alunos" className={({ isActive }) => `navbar__link${isActive ? ' active' : ''}`}>Alunos</NavLink>
        <NavLink to="/turmas" className={({ isActive }) => `navbar__link${isActive ? ' active' : ''}`}>Turmas</NavLink>
      </div>
      <div className="navbar__acoes">
        <ThemeToggle />
        <button className="botao botao--secundario" onClick={aoSair}>Sair</button>
      </div>
    </nav>
  );
}
