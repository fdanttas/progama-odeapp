// primeiro\primeiro\src\Components\AdicionarProduto\index.js
import React, { useState } from 'react';
import "./style.css";

const AdicionarProduto = ({ onAdd }) => {
    const[texto, setTexto] = useState("");

    const enviar = (e) => {
        e.preventDefault();
        if(texto.trim()) {
            onAdd(texto);
            setTexto("");
        }
    };                           
    return (
        <form className="adicionar-produto" onSubmit={enviar}>
            <input 
                type="text" 
                placeholder="Adicionar Produto" 
                value={texto} 
                onChange={(e) => setTexto(e.target.value)} 
            />
            <button type="submit">Adicionar</button>
        </form>
    );
}
export default AdicionarProduto;
    
