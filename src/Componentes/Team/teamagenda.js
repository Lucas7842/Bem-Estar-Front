import React, { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import 'moment/locale/pt-br';
import pt from 'date-fns/locale/pt-BR';
import '../../Componentes/Telas/AgendarAula/agendar.css';
import { cadastrarAgendamento } from '../UsuarioService';
import { useNavigate } from 'react-router-dom';

registerLocale('pt-BR', pt);
moment.locale('pt-br');

function AgendarAulaPage() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

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

      const successMsg = 'Agendamento cadastrado com sucesso!';
      console.log(successMsg);
      setSuccessMessage(successMsg);

      // Redirecionar para a página do cabeçalho após 2 segundos
      setTimeout(() => {
        navigate('/consultaraula');
      }, 2000);

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
      <div>
        <p className="mt-3 mb-0">Quer consultar aulas agendadas?</p>
        <p className="mb-0"><strong><a href="/consultaraula" style={{ color: 'black' }}>Consultar Aulas</a></strong></p>
      </div>
    </div>
  );
}

export default AgendarAulaPage;