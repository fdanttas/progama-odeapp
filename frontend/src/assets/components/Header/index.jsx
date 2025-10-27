import {Link} from 'react-router-dom';
import './style.css';

function Header() {
    return (
        <header className="header">
            <h1>Minha Aplicação</h1>
            <nav> 
                <ul>
                    <li><Link to="/">Início</Link></li>
                    <li><Link to="/about">Sobre</Link></li>
                    <li><Link to="/contact">Contato</Link></li>
                </ul>
            </nav>
        </header>
    );
}   

export default Header;


