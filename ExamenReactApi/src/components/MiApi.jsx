//MiApi.jsx
import React, {useState, useEffect} from 'react';
import Buscador from './Buscador';


 const MiApi = () => {
  //Seteando hooks de useState
  //Variable de estado componente de busqueda inicializada como array vacio.
  const [ feriados, setFeriados ] = useState([]);
  const [feriadosFiltrados, setFeriadosFiltrados] = useState([]);
  

  //funcion para traer los datos de la API
  const URL = 'https://api.victorsanmartin.com/feriados/es.json'

   const showData = async () => {
    const response = await fetch(URL)
    const data = await response.json()
   
    // Ordenar los datos alfabéticamente por el título
   const sortedData = data.data.sort((a, b) => a.title.localeCompare(b.title));
   setFeriados(sortedData);
   setFeriadosFiltrados(sortedData);
  }
  

  useEffect(() => {
    showData()
  },[])

  //renderizamos la vista de el componente

  return (
    <div className='Api'>
      <Buscador feriados={feriados} setFeriadosFiltrados={setFeriadosFiltrados} />
    
    <table  className='table table-striped table-hover mt-5 shadow-lg'>
      <thead  >
        <tr>
          <th scope='col'>FECHA</th>
          <th scope='col'>TITULO</th>
          <th scope='col'>TIPO</th>
          <th scope='col'>IRRENUNCIABLE</th>
        </tr>
      </thead>
      <tbody>
        {feriadosFiltrados.map((feriado, index) => (
          <tr key={index}>
            <td>{feriado.date}</td>
            <td>{feriado.title}</td>
            <td>{feriado.type}</td>
            <td>{feriado.inalienable? "Si" : "No"}</td>
          </tr>
        ))}
      </tbody>

    </table>
    </div>
  )
}

export default MiApi