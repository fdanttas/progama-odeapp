// src\assets\Footer\index.jsx

import './style.css';
function Footer() {
    return (
        <footer className="footer">
        <div className="footer__wrap">
            <div>
                <strong>Contabilidade Dendenzereiros</strong> - CNPJ: 00.000.000/0001-00<br />
            </div>
            <div>
                Avenida Dendezeiros, 890 - Bomfim - Salvador - BA<br />
            </div>
        </div>
        <div className='copy'>
            ©{new Date().getFullYear()} Contabilidade Dendenzereiros. Todos os direitos reservados.
        </div>
    </footer>
    );
}
export default Footer;