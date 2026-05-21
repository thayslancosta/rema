import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { DadosProvider } from './context/DadosContext';

import PrivateRoute from './components/PrivateRoute';
import Layout from './components/Layout';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Alunos from './pages/Alunos';
import AlunoForm from './pages/AlunoForm';
import Turmas from './pages/Turmas';
import TurmaForm from './pages/TurmaForm';
import TurmaDetalhe from './pages/TurmaDetalhe';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <DadosProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />

              <Route element={<PrivateRoute><Layout /></PrivateRoute>}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/alunos" element={<Alunos />} />
                <Route path="/alunos/novo" element={<AlunoForm />} />
                <Route path="/turmas" element={<Turmas />} />
                <Route path="/turmas/novo" element={<TurmaForm />} />
                <Route path="/turmas/:id" element={<TurmaDetalhe />} />
              </Route>

              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </DadosProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
