import React, { useState } from "react";
import { LoadScript, GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import "bootstrap/dist/css/bootstrap.min.css";

const containerStyle = {
  width: '100%',
  height: '400px'
};

const defaultCenter = {
  lat: -23.6815,
  lng: -46.6202
};

function Cep() {
  const [cep, setCep] = useState('');
  const [tipo, setTipo] = useState('academias');
  const [estabelecimentos, setEstabelecimentos] = useState([]);
  const [center, setCenter] = useState(defaultCenter);
  const [loading, setLoading] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState(null);

  const handleChangeCep = (e) => {
    setCep(e.target.value);
  };

  const handleChangeTipo = (e) => {
    setTipo(e.target.value);
  };

  const geocodeCep = (cep) => {
    return new Promise((resolve, reject) => {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: cep }, (results, status) => {
        if (status === 'OK') {
          const location = results[0].geometry.location;
          resolve({ lat: location.lat(), lng: location.lng() });
        } else {
          reject(`Geocode was not successful for the following reason: ${status}`);
        }
      });
    });
  };

  const onSearch = () => {
    const cepRegex = /^\d{5}-\d{3}$/;
    if (!cepRegex.test(cep)) {
      alert('Por favor, insira um CEP válido.');
      return;
    }

    setLoading(true);

    geocodeCep(cep)
      .then(({ lat, lng }) => {
        setCenter({ lat, lng });

        // Substitua pela URL real da sua API para buscar estabelecimentos
        const estabelecimentosUrl = `https://api.seuservico.com/${tipo}?lat=${lat}&lng=${lng}&radius=10`;

        return fetch(estabelecimentosUrl);
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Erro ao buscar estabelecimentos: ${response.statusText}`);
        }
        return response.json();
      })
      .then(estabelecimentosData => {
        setEstabelecimentos(estabelecimentosData);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erro ao buscar estabelecimentos:', error);
        alert(`Erro ao buscar estabelecimentos. Por favor, tente novamente mais tarde. Detalhes: ${error.message}`);
        setLoading(false);
      });
  };

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
              
              <div className="my-3">
                <div className="text-center">
                  <button type="button" onClick={onSearch}>
                    {loading ? 'Buscando...' : 'BUSCAR'}
                  </button>
                </div>
              </div>
            </form>

            <LoadScript googleMapsApiKey="AIzaSyDKsBA4oAr48NUrk-fg_0BO43kquUlaFs0">
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={13}
              >
                {estabelecimentos.map((estabelecimento, index) => (
                  <Marker
                    key={index}
                    position={{ lat: estabelecimento.latitude, lng: estabelecimento.longitude }}
                    onClick={() => setSelectedPlace(estabelecimento)}
                  />
                ))}

                {selectedPlace && (
                  <InfoWindow
                    position={{ lat: selectedPlace.latitude, lng: selectedPlace.longitude }}
                    onCloseClick={() => setSelectedPlace(null)}
                  >
                    <div>
                      <strong>{selectedPlace.nome}</strong><br />
                      {selectedPlace.endereco}
                    </div>
                  </InfoWindow>
                )}
              </GoogleMap>
            </LoadScript>

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
