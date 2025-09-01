import React from 'react';
import './App.css';
import logo from '../src/assets/images/logo_senai.png';

function App() {

  const [item, setItem] = React.useState('');
  const [itens, setItens] = React.useState(['Mouse', 'Monitor', 'Teclado']);

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
            <img src={logo} alt="Logo Senai" className="logo" />
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
