import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'datatables.net-bs5';
import './_misVacantes.scss'
const MisVacantes = () => {
  const tableRef = useRef();

  useEffect(() => {
    $(tableRef.current).DataTable({
      language: {
        decimal: ",",
        thousands: ".",
        processing: "Procesando...",
        search: "Buscar:",
        lengthMenu: "Mostrar _MENU_ registros",
        info: "Mostrando _START_ a _END_ de _TOTAL_ registros",
        infoEmpty: "Mostrando 0 a 0 de 0 registros",
        infoFiltered: "(filtrado de _MAX_ registros totales)",
        infoPostFix: "",
        loadingRecords: "Cargando...",
        zeroRecords: "No se encontraron registros",
        emptyTable: "No hay datos disponibles en la tabla",
        paginate: {
          first: "Primero",
          previous: "Anterior",
          next: "Siguiente",
          last: "Último"
        },
        aria: {
          sortAscending: ": activar para ordenar columna ascendente",
          sortDescending: ": activar para ordenar columna descendente"
        }
      }
    });
  }, []);


  return (
    <table ref={tableRef} className="table table-striped myTable" style={{ width: '100%' }}>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Email</th>
          <th>Edad</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Ana</td><td>ana@mail.com</td><td>22</td></tr>
        <tr><td>Carlos</td><td>carlos@mail.com</td><td>30</td></tr>
        <tr><td>Lucía</td><td>lucia@mail.com</td><td>25</td></tr>
      </tbody>
    </table>
  );
};

export default MisVacantes;
