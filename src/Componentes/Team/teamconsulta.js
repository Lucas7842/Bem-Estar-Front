import React, { useState, useEffect } from 'react';
import '../../Componentes/Telas/ConsultarAula/consultar.css';
import { consultarAgendamentos, excluirAgendamento, atualizarAgendamento } from '../UsuarioService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faSave } from '@fortawesome/free-solid-svg-icons';

function TeamConsulta() {
  const [agendamentos, setAgendamentos] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedAgendamento, setEditedAgendamento] = useState({});
  const [validationError, setValidationError] = useState('');

  useEffect(() => {
    async function fetchAgendamentos() {
      try {
        const response = await consultarAgendamentos();
        setAgendamentos(response.data);
      } catch (error) {
        console.error('Erro ao consultar agendamentos:', error);
      }
    }

    fetchAgendamentos();
  }, []);

  const handleDelete = async (index) => {
    try {
      const agendamento = agendamentos[index];
      await excluirAgendamento(agendamento.id);
      const updatedAgendamentos = [...agendamentos];
      updatedAgendamentos.splice(index, 1);
      setAgendamentos(updatedAgendamentos);
    } catch (error) {
      console.error('Erro ao excluir agendamento:', error);
    }
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditedAgendamento(agendamentos[index]);
    setValidationError('');
  };

  const handleSave = async () => {
    const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;

    if (!dateRegex.test(editedAgendamento.data)) {
      setValidationError('Data inválida. Formato correto: DD/MM/YYYY');
      return;
    }

    if (!timeRegex.test(editedAgendamento.horario)) {
      setValidationError('Horário inválido. Formato correto: HH:mm');
      return;
    }

    if (!editedAgendamento.local) {
      setValidationError('Local não pode ficar em branco.');
      return;
    }

    try {
      console.log('Salvando agendamento:', editedAgendamento);
      await atualizarAgendamento(editedAgendamento.id, editedAgendamento);
      const updatedAgendamentos = [...agendamentos];
      updatedAgendamentos[editingIndex] = editedAgendamento;
      setAgendamentos(updatedAgendamentos);
      setEditingIndex(null);
      setEditedAgendamento({});
    } catch (error) {
      console.error('Erro ao atualizar agendamento:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedAgendamento({ ...editedAgendamento, [name]: value });
  };

  return (
    <div className="consulta-aulas-container">
      <h2 className="titulo" style={{ textAlign: 'center' }}>Consulta de Aulas</h2>
      <div style={{ textAlign: 'left', marginTop: '10px', marginLeft: '10px' }}>
        <h3 style={{ textAlign: 'left' }}>Lista de Agendamentos</h3>
      </div>
      <div className="lista-agendamentos">
        {agendamentos.map((agendamento, index) => (
          <div className="agendamento-card" key={index}>
            {index === editingIndex ? (
              <div>
                <p>Data: <input type="text" name="data" value={editedAgendamento.data} onChange={handleInputChange} placeholder="DD/MM/YYYY" /></p>
                <p>Horário: <input type="text" name="horario" value={editedAgendamento.horario} onChange={handleInputChange} placeholder="HH:mm" /></p>
                <p>Local: <input type="text" name="local" value={editedAgendamento.local} onChange={handleInputChange} /></p>
                <FontAwesomeIcon icon={faSave} onClick={handleSave} style={{ cursor: 'pointer', marginRight: '10px' }} />
                {validationError && <p style={{ color: 'red' }}>{validationError}</p>}
              </div>
            ) : (
              <div>
                <p>Data: {agendamento.data}</p>
                <p>Horário: {agendamento.horario}</p>
                <p>Local: {agendamento.local}</p>
                <div>
                  <FontAwesomeIcon icon={faEdit} onClick={() => handleEdit(index)} style={{ cursor: 'pointer', marginRight: '10px' }} />
                  <FontAwesomeIcon icon={faTrash} onClick={() => handleDelete(index)} style={{ cursor: 'pointer' }} />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamConsulta;
