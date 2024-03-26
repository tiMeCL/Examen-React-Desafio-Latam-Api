import React, { useState } from 'react';

const Buscador = ({ feriados, setFeriadosFiltrados }) => {
  // Estado para almacenar el valor del input de búsqueda
  const [busqueda, setBusqueda] = useState('');

  // Función para manejar el cambio en el input de búsqueda
  const handleInputChange = event => {
     // Actualiza el estado de búsqueda con el valor del input
    const inputValue = event.target.value;
    setBusqueda(inputValue);
    
    // Filtra los feriados según el valor del input
    const filteredData = feriados.filter(feriado =>
      feriado.title.toLowerCase().includes(inputValue.toLowerCase())
    );
    // Actualiza los feriados filtrados
    setFeriadosFiltrados(filteredData);
  };

  return (
    <div className="buscador">
      <input
        type="text"
        placeholder="Buscar por título"
        value={busqueda}
        // Evento "onChange": Que se activa cada vez que el usuario modifica el contenido del input
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Buscador;
