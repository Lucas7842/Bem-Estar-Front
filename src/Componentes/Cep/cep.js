import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import "bootstrap/dist/css/bootstrap.min.css";
import 'leaflet/dist/leaflet.css';

// Corrigir ícones do Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

function Cep() {
    const [cep, setCep] = useState('');
    const [tipo, setTipo] = useState('academias');
    const [estabelecimentos, setEstabelecimentos] = useState([]);
    const [center, setCenter] = useState([-23.6815, -46.6202]); // Coordenadas padrão (Diadema)
    const [loading, setLoading] = useState(false);

    const handleChangeCep = (e) => {
        setCep(e.target.value);
    }

    const handleChangeTipo = (e) => {
        setTipo(e.target.value);
    }

    const onSearch = () => {
        const cepRegex = /^\d{5}-\d{3}$/;
        if (!cepRegex.test(cep)) {
            alert('Por favor, insira um CEP válido.');
            return;
        }

        setLoading(true);
        
        const apiUrl = `https://api.seuservico.com/${tipo}?cep=${cep}&radius=10`; // Substitua pela URL real da sua API
        console.log(`Fetching data from: ${apiUrl}`);
        
        // Exemplo de API fictícia - Substitua pela sua API
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Erro ao buscar estabelecimentos: ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('Data received:', data);

                // Verificar se os dados estão no formato esperado
                if (Array.isArray(data) && data.length > 0 && data[0].latitude && data[0].longitude) {
                    setEstabelecimentos(data);

                    // Ajustar o centro do mapa para o primeiro resultado (se houver)
                    setCenter([data[0].latitude, data[0].longitude]);
                } else {
                    alert('Nenhum estabelecimento encontrado ou dados no formato inesperado.');
                }

                setLoading(false);
            })
            .catch(error => {
                console.error('Erro ao buscar estabelecimentos:', error);
                alert(`Erro ao buscar estabelecimentos. Por favor, tente novamente mais tarde. Detalhes: ${error.message}`);
                setLoading(false);
            });
    }

    return (
        <section id="contact" className="contact">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>BUSCAR</h2>
                    <p>Encontre o que você procura próximo a você</p>
                </div>

                <div className="row mt-5">
                    <div className="col-lg-2">
                        <div className="info"></div>
                    </div>

                    <div className="col-lg-5 mt-5 mt-lg-0">
                        <form className="php-email-form">
                            <div className="form-group mt-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="cep"
                                    id="cep"
                                    pattern="\d{5}-\d{3}"
                                    placeholder="Digite seu CEP"
                                    value={cep}
                                    onChange={handleChangeCep}
                                    required
                                />
                            </div>
                            <div className="form-group mt-3">
                                <select className="form-control" value={tipo} onChange={handleChangeTipo}>
                                    <option value="academias">Academias</option>
                                    <option value="clinicas">Clínicas</option>
                                    <option value="parques">Parques</option>
                                    <option value="psicologos">Psicólogos</option>
                                </select>
                            </div>
                            <div className="my-3">
                                <div className="text-center">
                                    <button type="button" onClick={onSearch}>
                                        {loading ? 'Buscando...' : 'BUSCAR'}
                                    </button>
                                </div>
                            </div>
                        </form>

                        <MapContainer center={center} zoom={13} style={{ height: '400px', width: '100%' }}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            />
                            {estabelecimentos.map((estabelecimento, index) => (
                                <Marker key={index} position={[estabelecimento.latitude, estabelecimento.longitude]}>
                                    <Popup>
                                        <strong>{estabelecimento.nome}</strong><br />
                                        {estabelecimento.endereco}
                                    </Popup>
                                </Marker>
                            ))}
                        </MapContainer>

                        <table id="resultsTable" className="table table-striped mt-3">
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Endereço</th>
                                </tr>
                            </thead>
                            <tbody>
                                {estabelecimentos.map((estabelecimento, index) => (
                                    <tr key={index}>
                                        <td>{estabelecimento.nome}</td>
                                        <td>{estabelecimento.endereco}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cep;
