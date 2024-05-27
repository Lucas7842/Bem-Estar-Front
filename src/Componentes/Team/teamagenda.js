import React, { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import 'moment/locale/pt-br';
import pt from 'date-fns/locale/pt-BR';
import './agendar.css';
import { cadastrarAgendamento } from '../../UsuarioService';
import { useNavigate } from 'react-router-dom'; // Importando o hook useNavigate

registerLocale('pt-BR', pt);
moment.locale('pt-br');

function AgendarAulaPage() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [successMessage, setSuccessMessage] = useState(null); // Define successMessage state

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const dadosAgendamento = {
        data: moment(selectedDate).format('DD/MM/YYYY'),
        horario: moment(selectedTime).format('HH:mm'),
        local: selectedLocation
      };

      await cadastrarAgendamento(dadosAgendamento);

      setSuccessMessage('Agendamento cadastrado com sucesso!'); // Set success message
    } catch (error) {
      console.error('Erro ao cadastrar agendamento:', error.message);
    }
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
            locale="pt-BR"
            className="form-control"
            popperPlacement="right-start"
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
            locale="pt-BR"
            className="form-control"
            popperPlacement="right-start"
          />
        </div>
        <div className="form-group">
          <label>Local:</label>
          <input
            type="text"
            value={selectedLocation}
            onChange={handleLocationChange}
            className="form-control"
            placeholder="Digite o local"
            style={{ padding: '12px' }}
          />
        </div>
        <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#ffc451', border: 'none' }}>Agendar</button>
      </form>
      {successMessage && <div className="success-message">{successMessage}</div>}
    </div>
  );
};

export default AgendarAulaPage;