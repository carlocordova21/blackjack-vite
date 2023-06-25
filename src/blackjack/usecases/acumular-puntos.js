import { valorCarta } from './';

/**
 * Esta función acumula los puntos de los jugadores
 * @param {String} carta carta que se ha jugado
 * @param {Number} turno índice del jugador que tiene el turno
 * @param {Array<Number>} puntosJugadores array que contiene los puntos de los jugadores
 * @param {HTMLElement} puntosHTML elemento HTML que contiene los puntos
 * @returns
 */
export const acumularPuntos = (carta, turno, puntosJugadores, puntosHTML) => {
  if (!carta) throw 'La carta debe tener valor';
  if (!turno && turno < 0) throw 'El turno debe tener valor';
  if (!puntosJugadores || puntosJugadores.length < 2)
    throw 'Los puntos de los jugadores deben tener valor y deben existir al menos 2 jugadores';
	if (!puntosHTML) throw ('Es necesario puntosHTML')

  puntosJugadores[turno] += valorCarta(carta);
  puntosHTML[turno].innerText = puntosJugadores[turno];
  return puntosJugadores[turno];
};
