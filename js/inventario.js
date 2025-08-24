const btnMovimiento = document.getElementById('btnMovimiento');
const modal = document.getElementById('modalMovimiento');
const cerrar = document.getElementById('cerrarModal');

const fecha = document.getElementById('fechaMovimiento');
const usuario = document.getElementById('usuarioMovimiento');
const detalle = document.getElementById('detalleMovimiento');

// datos del movimiento
const ultimoMovimiento = {
  fecha: '2025-07-29 16:45',
  usuario: 'Jefferson Mendez',
  detalle: 'Ingreso 800 unidades de trigo'
};


btnMovimiento.addEventListener('click', () => {
  fecha.textContent = `Fecha: ${ultimoMovimiento.fecha}`;
  usuario.textContent = `Usuario: ${ultimoMovimiento.usuario}`;
  detalle.textContent = `Detalle: ${ultimoMovimiento.detalle}`;
  
  modal.classList.remove('hidden'); // Mostrar el modal
  modal.classList.add('grid', 'place-items-center')
});


cerrar.addEventListener('click', () => {
  modal.classList.add('hidden'); // Ocultar el modal
  modal.classList.remove('grid', 'place-items-center')
});

