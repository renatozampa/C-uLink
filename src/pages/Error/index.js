import './error.css';
import { Link } from 'react-router-dom';


export default function Error() {
    return (
        <div className='container-error'>
            <img src='/404.svg' alt='Página não encontrada' />
            <h1>Página não encontra</h1>
            <Link to="/">
                Voltar para Home
            </Link>
        </div>
    )
}