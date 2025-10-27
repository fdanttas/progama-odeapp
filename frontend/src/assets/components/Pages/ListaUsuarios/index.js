import { useEffect } from "react";
import './styles.css';

function ListaUsuarios({ usuarios, setUsuarios }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const response = await api.get('/usuarios');
                setUsuarios(response.data);
            }
            catch (error) {
                console.error('Erro ao buscar usuários:', error);
            }
            finally {
                setLoading(false);
            }
        };

        fetchUsuarios();
    }
    , [setUsuarios]);

    if (loading) {
        return <p>Carregando usuários...</p>;
    }   
    return 