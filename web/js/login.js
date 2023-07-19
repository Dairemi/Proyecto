function mostrarFormulario(formulario) {
    if (formulario === 'login') {
      document.getElementById('formularioLogin').style.display = "block";
      document.getElementById('formularioRegistro').style.display = "none";
    } else if (formulario === 'registro') {
      document.getElementById('formularioLogin').style.display = "none";
      document.getElementById('formularioRegistro').style.display = "block";
    }
  }
  
