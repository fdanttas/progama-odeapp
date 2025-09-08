// src\components\InfoCliente\index.jsx

import  './styles.css';
import { useState } from 'react';

export function InfoCliente() {
    const[nome, setNome] = useState('');
    const[email, setEmail] = useState('');

    const[listaClientes, setListaClientes] = useState([]);

    function adicionarCliente(event) {
        event.preventDefault();
        setListaClientes([...listaClientes, {nome: nome, email: email}]);
        setNome('');
        setEmail('');
    }
    return (
        <div className="info-cliente-container">

            <h2>Cadrasto de Clientes</h2>
            <form onSubmit={adicionarCliente}>
               <div>
                <label>Nome: </label> 
                <input type="text" 
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required />
                </div> 
                <div>
                <label>Email: </label> 
                <input type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required />
                </div>
                <button type="submit">Adicionar Cliente</button>
            </form>
            <h3>Lista de Clientes</h3>
            <ul>
                {listaClientes.map((cliente, index) => (
                    <li key={index}>{cliente.nome} - {cliente.email}</li>
                ))}
            </ul>
        </div>
    );
}

export default InfoCliente;