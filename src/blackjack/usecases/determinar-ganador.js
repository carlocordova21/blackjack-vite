/**
 * Función que determina quién gana
 * @param {Array<Number>} puntosJugadores array que contiene los puntos de los jugadores
 */
export const determinarGanador = (puntosJugadores) => {
  let [puntosMinimos, puntosComputadora] = puntosJugadores;
  if (puntosComputadora === puntosMinimos) {
    alert('Empate!');
  } else if (puntosMinimos > 21) {
    alert('Computadora gana!');
  } else if (puntosComputadora > 21) {
    alert('Jugador Gana!');
  } else {
    alert('Computadora Gana!');
  }
};