import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

export default function Layout() {
  return (
    <>
      <Navbar />
      <a className="skip-link" href="#main">Pular para o conteúdo</a>
      <main id="main" className="container">
        <Outlet />
      </main>
    </>
  );
}
