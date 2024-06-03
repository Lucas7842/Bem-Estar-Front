import React, { useState, useEffect, useCallback } from 'react';
import { LoadScript, GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import 'bootstrap/dist/css/bootstrap.min.css';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const defaultCenter = {
  lat: -23.6815,
  lng: -46.6202,
};

function Cep() {
  const [cep, setCep] = useState('');
  const [tipo, setTipo] = useState('gym, nutritionist, park, personal_trainer, psychologist, psychiatrist'); // 'gym' é o termo correto para academias no Google Places
  const [estabelecimentos, setEstabelecimentos] = useState([]);
  const [center, setCenter] = useState(defaultCenter);
  const [loading, setLoading] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [map, setMap] = useState(null);

  const handleChangeCep = (e) => {
    setCep(e.target.value);
  };

  const handleChangeTipo = (e) => {
    setTipo(e.target.value);
  };

  const geocodeCep = useCallback((cep) => {
    return new Promise((resolve, reject) => {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: cep }, (results, status) => {
        if (status === 'OK') {
          const location = results[0].geometry.location;
          resolve({ lat: location.lat(), lng: location.lng() });
        } else {
          reject(new Error(`O geocódigo não foi bem-sucedido pelo seguinte motivo: ${status}`));
        }
      });
    });
  }, []);

  const onSearch = useCallback(() => {
    const cepRegex = /^\d{5}-\d{3}$/;
    if (!cepRegex.test(cep)) {
      alert('Por favor, insira um CEP válido.');
      return;
    }

    setLoading(true);

    geocodeCep(cep)
      .then(({ lat, lng }) => {
        setCenter({ lat, lng });

        const service = new window.google.maps.places.PlacesService(map);
        const request = {
          location: { lat, lng },
          radius: '10000', // 10 km
          type: [tipo],
        };

        service.nearbySearch(request, (results, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            setEstabelecimentos(results);
            setLoading(false);
          } else {
            throw new Error(`Erro ao buscar estabelecimentos: ${status}`);
          }
        });
      })
      .catch((error) => {
        console.error('Erro ao buscar estabelecimentos:', error);
        alert(`Erro ao buscar estabelecimentos. Por favor, tente novamente mais tarde. Detalhes: ${error.message}`);
        setLoading(false);
      });
  }, [cep, tipo, geocodeCep, map]);

  return (
    <div className="container">
      <div className="form-group">
        <input
          type="text"
          value={cep}
          onChange={handleChangeCep}
          placeholder="Insira o CEP"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <select value={tipo} onChange={handleChangeTipo} className="form-control">
          <option value="gym">Academias</option>
          <option value="nutritionist">Nutricionista</option>
          <option value="park">Praça</option>
          <option value="personal_trainer">Personal</option>
          <option value="psychologist">Psicologo</option>
          <option value="psychiatrist">Psiquiatra</option>

          {/* Adicione mais opções conforme necessário */}
        </select>
      </div>
      <button onClick={onSearch} className="btn btn-primary">
        {loading ? 'Buscando...' : 'Buscar'}
      </button>
      <LoadScript googleMapsApiKey="AIzaSyDGRlYoOAznrhtVPo5g8CjfMi7PlWz9bCM" libraries={["places"]}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
          onLoad={(mapInstance) => setMap(mapInstance)}
        >
          {estabelecimentos.map((estabelecimento, index) => (
            <Marker
              key={index}
              position={{
                lat: estabelecimento.geometry.location.lat(),
                lng: estabelecimento.geometry.location.lng(),
              }}
              onClick={() => setSelectedPlace(estabelecimento)}
            />
          ))}
          {selectedPlace && (
            <InfoWindow
              position={{
                lat: selectedPlace.geometry.location.lat(),
                lng: selectedPlace.geometry.location.lng(),
              }}
              onCloseClick={() => setSelectedPlace(null)}
            >
              <div>
                <h2>{selectedPlace.name}</h2>
                <p>{selectedPlace.vicinity}</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default Cep;
