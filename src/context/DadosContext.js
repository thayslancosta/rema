import { createContext, useContext, useState } from 'react';
import alunosMock from '../data/alunos';
import turmasMock from '../data/turmas';

const DadosContext = createContext();

export function DadosProvider({ children }) {
  const [alunos, setAlunos] = useState(alunosMock);
  const [turmas, setTurmas] = useState(turmasMock);

  function adicionarAluno(aluno) {
    setAlunos((lista) => [...lista, { ...aluno, id: Date.now() }]);
  }

  function adicionarTurma(turma) {
    setTurmas((lista) => [...lista, { ...turma, id: Date.now() }]);
  }

  return (
    <DadosContext.Provider value={{ alunos, turmas, adicionarAluno, adicionarTurma }}>
      {children}
    </DadosContext.Provider>
  );
}

export function useDados() {
  return useContext(DadosContext);
}
