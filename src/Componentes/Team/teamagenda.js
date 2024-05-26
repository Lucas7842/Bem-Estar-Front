import React, { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
<<<<<<< HEAD
import moment from 'moment'; // Importa Moment.js
import 'moment/locale/pt-br'; // Importa o idioma pt-br
import pt from 'date-fns/locale/pt-BR'; // Importa o locale de date-fns para react-datepicker
import '../../Componentes/Telas/AgendarAula/agendar.css';
import { cadastrarAgendamento } from "../UsuarioService";

// Registra o locale para o react-datepicker
registerLocale('pt-BR', pt);
=======
import moment from 'moment';
import 'moment/locale/pt-br';
import ptBR from 'date-fns/locale/pt-BR'; // Importa o locale do date-fns
import '../../Componentes/Telas/AgendarAula/agendar.css';
import { cadastrarAgendamento } from "../UsuarioService";

// Registra o locale do date-fns no react-datepicker
registerLocale('pt-BR', ptBR);

// Configura o moment para usar o locale pt-br
moment.locale('pt-br');
>>>>>>> e231bffd97eb9b2527364b5c8082f44bf5b7f6a0

function TeamAgenda() {
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
<<<<<<< HEAD

=======
 
>>>>>>> e231bffd97eb9b2527364b5c8082f44bf5b7f6a0
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const dadosAgendamento = {
        data: moment(selectedDate).format('DD/MM/YYYY'), // Formato DD/MM/YYYY para a data
        horario: moment(selectedTime).format('HH:mm'), // Formato HH:mm para o horário
        local: selectedLocation
      };
      
      // Chama a função cadastrarAgendamento do UsuarioService para enviar os dados para o backend
      await cadastrarAgendamento(dadosAgendamento);
     
      console.log('Agendamento cadastrado com sucesso!');
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
            locale="pt-BR" // Define o idioma para português do Brasil
            className="form-control"
            popperPlacement="right-start" // Altera o posicionamento do pop-up do calendário
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
            dateFormat="HH:mm" // Define o formato para exibir horas em formato de 24 horas
            locale="pt-BR" // Define o idioma para português do Brasil
            className="form-control"
            popperPlacement="right-start" // Altera o posicionamento do pop-up do calendário
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
            style={{ padding: '12px' }} // Estilo embutido para aumentar o preenchimento
          />
        </div>
        <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#ffc451', border: 'none' }}>Agendar</button>
      </form>
    </div>
  );
};
<<<<<<< HEAD

=======
 
>>>>>>> e231bffd97eb9b2527364b5c8082f44bf5b7f6a0
export default TeamAgenda;
