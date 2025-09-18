// src\pages\FaleConosco\index.jsx

import './style.css';

function FaleConosco() { 
    function handleSubmit(event) {
        event.preventDefault();
        alert('Mensagem enviada com sucesso!');
    }   
    return (
        <section className='contato'>
            <h1>Fale conosco</h1>
            <p>Tire suas dúvidas e peça um orçamento sem compromisso .</p>

            <form className='form' onSubmit={handleSubmit}>
                <div className='grid cols-2'>
                    <label className='field'>
                        <span>Nome</span>
                        <input type="text" name="nome" required />
                    </label>
                    <label className='field'>
                        <span>Email</span>
                        <input type="email" name="email" required />
                    </label>
                </div>
                <label className='field'>
                    <span>Mensagem</span>
                    <textarea name="mensagem" rows="5" required></textarea>
                </label>
                <button type="submit" className='btn'>Enviar</button>
            </form>
        </section>
    );
}   
export default FaleConosco;