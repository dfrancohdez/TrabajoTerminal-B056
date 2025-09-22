import { useState } from 'react';
import DataTable from 'datatables.net-react';
import DT from 'datatables.net-bs5';
import './_misVacantes.scss'
import Header from '../../../components/Header/Header';

// Registrar el plugin
DataTable.use(DT);

function App() {
  const [tableData] = useState([
    [
      'Desarrollador Frontend',
      '$25,000',
      'Remoto',
      'CDMX',
      'TI',
      '2',
      '2025-09-01',
      'Activo',
      'Editar'
    ],
    [
      'Diseñador UX/UI',
      '$20,000',
      'Híbrido',
      'Guadalajara',
      'Diseño',
      '1',
      '2025-09-10',
      'Inactivo',
      'Editar'
    ],
    [
      'Administrador de Base de Datos',
      '$30,000',
      'Presencial',
      'Monterrey',
      'TI',
      '3',
      '2025-09-05',
      'Activo',
      'Editar'
    ]
  ]);

  return (
    <div className="background">
      <Header />
      <div className='container d-flex flex-column justify-content-between align-items-center'>
      <div className='input__container  d-flex flex-column align-items-center mt-5' style={{padding:"3px"}}>
        <h3 className='bold'>Tus vacantes</h3>
        <p>Gestione y administre las vacantes de empleo de manera eficiente.</p>
      </div>
      <button className="btn btn-primary mb-3 bold">Crear vacantes</button>
      <DataTable
        data={tableData}
        className="table table-striped"
        options={{
          language: {
            decimal: ",",
            thousands: ".",
            processing: "Procesando...",
            search: "Buscar:",
            lengthMenu: "Mostrar _MENU_ registros",
            info: "Mostrando _START_ a _END_ de _TOTAL_ registros",
            infoEmpty: "Mostrando 0 a 0 de 0 registros",
            infoFiltered: "(filtrado de _MAX_ registros totales)",
            loadingRecords: "Cargando...",
            zeroRecords: "No se encontraron registros",
            emptyTable: "No hay datos disponibles en la tabla",
            paginate: {
              first: "Primero",
              previous: "Anterior",
              next: "Siguiente",
              last: "Último",
            },
            aria: {
              sortAscending: ": activar para ordenar columna ascendente",
              sortDescending: ": activar para ordenar columna descendente",
            },
          },
        }}
      >
        <thead className="table-primary">
          <tr>
            <th>Título</th>
            <th>Salario</th>
            <th>Modalidad</th>
            <th>Ubicación</th>
            <th>Categoría</th>
            <th>Cupos</th>
            <th>Fecha de Publicación</th>
            <th>Estado</th>
            <th>Acción</th>
          </tr>
        </thead>
      </DataTable>
      </div>
    </div>
  );
}

export default App;
