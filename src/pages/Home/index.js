import { FiLink } from 'react-icons/fi';
import './home.css';
import { useState } from 'react';

import Menu from '../../components/menu'
import LinkItem from '../../components/LinkItem';
import { saveLink } from '../../services/storeLinks'

import api from '../../services/api';

export default function Home() {
    const [link, setLink] = useState('');
    const [data, setData] = useState({});
    const [showModal, setShowModal] = useState(false)

    async function handleShortLink() {
        try {
            const response = await api.post('/shorten', {
                long_url: link
            })

            setData(response.data)
            setShowModal(true)
            saveLink('254', response.data)
            setLink('')
        } catch {
            alert('Opss.. parece que algo deu errado')
            setLink('')
        }
    }

    return (
        <div className="container-home">
            <div className="logo">
                <img src="/logo.svg" alt="Sujeito Link Logo" />
                <h1>Céulink</h1>
                <span>Cole seu link para encurtar 👇</span>
            </div>


            <div className="area-input">
                <div>
                    <FiLink size={24} color="#FFF" />
                    <input
                        placeholder='Cole seu link aqui...'
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                    />
                </div>

                <button onClick={handleShortLink}>Gerar Link</button>
            </div>


            <Menu />


            {showModal && (
                <LinkItem
                    closeModal={() => setShowModal(false)}
                    content={data}
                />
            )}
        </div>

    )

}