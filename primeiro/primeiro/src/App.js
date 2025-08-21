import React from 'react';
import './App.css';

function App() {

  const [item, setItem] = React.useState('');
  const [itens, setItens] = React.useState(['Carne', 'Frango', 'Peixe']);

    const adicionarItem = () => {
        if (itens.includes(item)) {
            alert('Esse item já existe');
            return;
        }

        setItens([...itens, item]);
        setItem('');
    };
  return (
    
       <div className="App">
            <h1>Lista de Compras</h1>
            <input
                type="text"
                value={item}
                onChange={(e) => setItem(e.target.value)}
                placeholder="Adicione o item"
            />
            <button onClick={adicionarItem}>Adicionar item</button>
            <ul>
   
                {itens.map((user, index) => (
                    <li key={index}>{user}</li>
                ))}
            </ul>
    </div>
  );
}

export default App;
