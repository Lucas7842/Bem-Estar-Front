// src/Componentes/Team/agendar.js

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './agendar.css';
import AgendarAulaPage from '../Telas/AgendarAula/AgendarAulaPage';

const AgendarAula = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState('');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Data:', selectedDate);
    console.log('Horário:', selectedTime);
    console.log('Local:', selectedLocation);
  };

  return (
    <div className="agendar-aula-container">
      <h2>Agendar Aula</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Data:</label>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Horário:</label>
          <DatePicker
            selected={selectedTime}
            onChange={handleTimeChange}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={30}
            timeCaption="Horário"
            dateFormat="HH:mm"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Local:</label>
          <select
            value={selectedLocation}
            onChange={handleLocationChange}
            className="form-control"
          >
            <option value="">Selecione o local</option>
            <option value="Local 1">Local 1</option>
            <option value="Local 2">Local 2</option>
            <option value="Local 3">Local 3</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Agendar</button>
      </form>
    </div>
  );
};

export default AgendarAulaPage;
