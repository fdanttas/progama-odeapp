// primeiro\primeiro\src\Components\ListaDeProdutos\index.js

import React from 'react';
import "./style.css";

const ListaDeProdutos = ({ intens }) => {
    return (
        <ul className="lista-de-produtos">
            {intens.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}
export default ListaDeProdutos;