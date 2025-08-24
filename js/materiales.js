
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const modal = document.getElementById('miModal');
    
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const actividad = document.getElementById('actividad').value;
      const material = document.getElementById('material').value;
      const valor = document.getElementById('valor').value;
      
      if (!material || !valor) {// si no hay nada en los espacios mostrar mensaje
        alert('Por favor completa todos los campos');
        return;
      }
      
      let tablaDestino;
      if (actividad === 'producir') {
        tablaDestino = document.querySelector('#tabla-produccion tbody');//seleccionar primera tabla produccion
      } else {
        tablaDestino = document.querySelector('#tabla-envasado tbody');//seleccionar la segunda tabla, envasado
      }
      
      const nuevaFila = document.createElement('tr');
      nuevaFila.innerHTML = `
        <td class="p-3">${material}</td>
        <td class="p-3">${valor}</td>
        <td class="p-3 text-center">
          <button class="text-blue-600 hover:text-blue-800 mr-2"><i class="fas fa-edit"></i></button>
          <button class="text-red-600 hover:text-red-800"><i class="fas fa-trash-alt"></i></button>
        </td>
      `;
      
      tablaDestino.appendChild(nuevaFila);
      document.getElementById('material').value = '';
      document.getElementById('valor').value = '';
      
      agregarEventosBotones();
    });
    
    // Función para agregar eventos a ambos tipos de botones (editar y eliminar del modal)
    function agregarEventosBotones() {
      // Botones de editar
      document.querySelectorAll(".fa-edit").forEach(boton => {
        if (!boton.hasAttribute('data-event-added')) {//evitar agregar el mismo evento más de una vez 
          boton.setAttribute('data-event-added', 'true');//true, configurado para que no se repita la accion en el futuro y duplique eventlistener
          boton.addEventListener("click", function() {
            const filaActual = boton.closest("tr");//Closest Busca la fila <tr> más cercana al botón. Es decir, la fila de la tabla donde está ese botón.
            document.getElementById("campoNombre").value = filaActual.cells[0].textContent;//es importante saber a que boton se aplico
            document.getElementById("campoValor").value = filaActual.cells[1].textContent;//se toma los valores de los campos, se le asignan a la fila actual en cada indice
            document.getElementById("miModal").classList.remove("hidden");//quitamos hidden
            modal.classList.add('flex', 'items-center', 'justify-center',);//recordar, agrege aca las clases css para evitar el conflicto entre flex y hidden que produce tailwind
            
            
            // Actualizamos el evento de guardar para que modifique la fila 
            document.getElementById("guardar").onclick = function() {//recordar que el onclik se lo agrego desde aca al boton guardar
              filaActual.cells[0].textContent = document.getElementById("campoNombre").value;
              filaActual.cells[1].textContent = document.getElementById("campoValor").value;
              document.getElementById("miModal").classList.add("hidden");
              modal.classList.remove('flex', 'items-center', 'justify-center');
            };
          });
        }
      });
      
      // Botones de eliminar 
      document.querySelectorAll(".fa-trash-alt").forEach(boton => {
        if (!boton.hasAttribute('data-event-added')) {
          boton.setAttribute('data-event-added', 'true');
          boton.addEventListener("click", function() {
            if (confirm('¿Estás seguro de que quieres eliminar este material?')) {
              boton.closest("tr").remove();
            }
          });
        }
      });
    }
    
    // Evento para el botón cancelar del modal
    document.getElementById("cancelar").addEventListener("click", function() {
      document.getElementById("miModal").classList.add("hidden");
    });
    
    // Inicializamos los eventos para los botones existentes al cargar la página
    agregarEventosBotones();

  });
