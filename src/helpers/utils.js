

export function calcularEdad(fechaNacimiento) {
    const fechaNacimientoDate = new Date(fechaNacimiento);
    const fechaActual = new Date();
    
    let edad = fechaActual.getFullYear() - fechaNacimientoDate.getFullYear();
  
    // Verificar si ya pasó el cumpleaños de este año
    if (fechaNacimientoDate.getMonth() > fechaActual.getMonth() || 
        (fechaNacimientoDate.getMonth() === fechaActual.getMonth() && 
         fechaNacimientoDate.getDate() > fechaActual.getDate())) {
      edad--;
    }
  
    return edad;
  }
  
  
  
  