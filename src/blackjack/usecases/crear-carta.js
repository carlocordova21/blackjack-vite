/**
 * Función para crear cartas
 * @param {String} carta valor de la carta
 * @param {Number} turno índice del jugador que tiene el turno
 * @param {HTMLElement} divCartas elemento HTML donde se insertará la carta
 */
export const crearCarta = (carta, turno, divCartas) => {
  const imgCarta = document.createElement('img');
  imgCarta.src = `assets/cards/${carta}.png`;
  imgCarta.classList.add('carta');
  imgCarta.alt = 'carta';
  divCartas[turno].append(imgCarta);
};