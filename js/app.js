document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btnIniciarSesion").addEventListener("click", (e) => {
    e.preventDefault(); 

    const nombreUsuario = document.getElementById("nombreUsuario").value.trim();
    const contraseña = document.getElementById("contraseña").value.trim();

    if (!nombreUsuario || !contraseña) {
      alert("Por favor ingresa tu nombre y contraseña para continuar.");
      return;
    }

    window.location.href = "menu.html"; 

});
 // Botón Registrarse
  document.getElementById("btnRegistrarse").addEventListener("click", (e) => {
    e.preventDefault();

    window.location.href = "registrosUsuario.html"; 
  });

});

    //modal para btn administrador con el toggle
  const adminButtons = document.querySelectorAll(".btn-admin");
  const modal = document.getElementById('modalAdmin')

  adminButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      modal.classList.toggle("hidden");
    });
  });



