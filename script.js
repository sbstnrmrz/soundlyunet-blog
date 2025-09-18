// Espera a que todo el contenido del HTML esté cargado
document.addEventListener('DOMContentLoaded', () => {
  
  // Selecciona todos los elementos que tienen la clase 'termino-titulo'
  const terminos = document.querySelectorAll('.termino-titulo');

  // Recorre cada uno de los títulos encontrados
  terminos.forEach(termino => {
    // Añade un "escuchador de eventos" que se activa cuando se hace clic
    termino.addEventListener('click', () => {
      // 'parentElement' es el div con la clase 'termino' que contiene el título y la definición
      const contenedor = termino.parentElement;
      
      // 'classList.toggle' es un método que añade la clase 'active' si no la tiene,
      // y la quita si ya la tiene. Esto hace que funcione como un interruptor.
      contenedor.classList.toggle('active');
    });
  });

});
