// Selecciona el div con la clase "tema"
const temaDiv = document.querySelector('.tema');

// Aumenta el tamaño del div al pasar el puntero por encima
temaDiv.addEventListener('mouseover', () => {
  temaDiv.classList.add('col-8');
});

// Vuelve al tamaño original al quitar el puntero del div
temaDiv.addEventListener('mouseout', () => {
  temaDiv.classList.remove('col-8');
});
