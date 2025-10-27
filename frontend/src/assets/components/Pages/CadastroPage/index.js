import { useForm } from 'react-hook-form';  
import { yupResolver } from '@hookform/resolvers/yup';  // Importa o yupResolver
import * as yup from 'yup';  // Importa o yup
import './styles.css';  

// Schema de validação com o yup
const cadastroSchema = yup.object({
    nome: yup
        .string()
        .required('O nome é obrigatório')
        .min(3, 'O nome deve ter pelo menos 3 caracteres'),

    email: yup
        .string()
        .email('Email inválido')
        .required('O email é obrigatório'),

    telefone: yup
        .string()
        .required('O telefone é obrigatório'),
});

function CadastroPage() {
    // Usando o hook useForm para o formulário
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(cadastroSchema),  // Conecta o yup com o useForm
        mode: 'onBlur',
        reValidateMode: 'onChange',
        defaultValues: {
            nome: '',
            email: '',
            telefone: '',
        },
    });

    // Função de submissão do formulário
    const onSubmit = async (data) => {
        try {
            await api.post('/usuarios', data);
            alert('Cadastro realizado com sucesso!');
        } catch (error) {
            alert('Erro ao realizar cadastro. Tente novamente.');
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="nome">Nome</label>
                <input
                    id="nome"
                    type="text"
                    {...register('nome')}
                />
                {errors.nome && <p>{errors.nome.message}</p>}
            </div>
            
            <div>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    {...register('email')}
                />
                {errors.email && <p>{errors.email.message}</p>}
            </div>

            <div>
                <label htmlFor="telefone">Telefone</label>
                <input
                    id="telefone"
                    type="text"
                    {...register('telefone')}
                />
                {errors.telefone && <p>{errors.telefone.message}</p>}
            </div>

            <button type="submit">Cadastrar</button>
        </form>
    );
}

export default CadastroPage;
