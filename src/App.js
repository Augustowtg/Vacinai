import React from 'react';
import './App.css';
import Button from './core/components/Button';

function App() {
  return (
    <div className="App">
      <h1>VacinAí </h1>
      <h4>Para Não Vacinados</h4>
      <Button>Posto de Vacinação</Button>
      <h4>Para Vacinados</h4>
      <Button>Estabelecimento com Descontos</Button>
    </div>
  );
}

export default App;
