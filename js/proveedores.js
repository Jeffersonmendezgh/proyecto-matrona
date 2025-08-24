 const crearProveedores = () => {
  const nombre = document.getElementById('nombreProveedor').value;
  const material = document.getElementById('materialName').value;
  const cantidad = document.getElementById('cantidadM').value;
  const frecuencia = document.getElementById('frecuenciaEntrega').value;
  const telefono = document.getElementById('telefonoP').value;
  const direccion = document.getElementById('direccionP').value;

  return `
    <tr class="hover:bg-gray-50">
      <td class="px-6 py-4 whitespace-nowrap text-gray-900">${nombre}</td>
      <td class="px-6 py-4 whitespace-nowrap text-gray-900">${material}</td>
      <td class="px-6 py-4 whitespace-nowrap text-gray-900">${cantidad}</td>
      <td class="px-6 py-4 whitespace-nowrap text-gray-900">${frecuencia}</td>
      <td class="px-6 py-4 whitespace-nowrap text-gray-900">${telefono}</td>
      <td class="px-6 py-4 whitespace-nowrap text-gray-900">${direccion}</td>
    </tr>
  `;
};

const nuevoProveedor = () => {
  const nuevaFila = crearProveedores();
  document.getElementById('filaProveedores').insertAdjacentHTML('afterbegin', nuevaFila);
};
 
    


const limpiarFormulario = () => {
  document.getElementById('nombreProveedor').value = '';
  document.getElementById('materialName').value = '';
  document.getElementById('cantidadM').value = '';
  document.getElementById('frecuenciaEntrega').value = '';
  document.getElementById('telefonoP').value = '';
  document.getElementById('direccionP').value = '';
};

const mostrarError = (mensaje) => {
  const mensajeError = document.getElementById('mensajeError');
  mensajeError.textContent = mensaje;
  mensajeError.classList.remove('hidden');

  // Ocultar automáticamente después de 3 segundos, funcion callback con setTimeout
  setTimeout(() => {
    mensajeError.classList.add('hidden');
  }, 3000);
};


const validarFormulario = () => {
  const nombre = document.getElementById('nombreProveedor').value;
  const material = document.getElementById('materialName').value;
  const cantidad = document.getElementById('cantidadM').value;
  const frecuencia = document.getElementById('frecuenciaEntrega').value;
  const telefono = document.getElementById('telefonoP').value;
  const direccion = document.getElementById('direccionP').value;

  if (!nombre || !material || !cantidad || !frecuencia || !telefono || !direccion) {
    mostrarError('Por favor, completa todos los campos antes de agregar el proveedor.');
    return false;
  }

  return true;
};

document.getElementById('btn-agregarProveedor').addEventListener('click', (e) => {
  e.preventDefault();
  if(validarFormulario()){
  nuevoProveedor();
  limpiarFormulario();
}
});
    

   