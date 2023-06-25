import { acumularPuntos, crearCarta, determinarGanador, pedirCarta } from "./";

/**
 * Función que realiza el turno de la computadora
 * @param {Number} puntosMinimos puntos mínimos para ganar
 * @param {Array<String>} deck deck de cartas
 * @param {Array<Number>} puntosJugadores array que contiene los puntos de los jugadores
 * @param {HTMLElement} puntosHTML elemento HTML que contiene los puntos de los jugadores
 * @param {HTMLElement} divCartas elemento HTML que contiene las cartas de los jugadores
 */
export const turnoComputadora = (puntosMinimos, deck, puntosJugadores, puntosHTML, divCartas) => {
  let puntosComputadora = 0;
  do {
    const carta = pedirCarta(deck);
    puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1, puntosJugadores, puntosHTML);
    crearCarta(carta, puntosJugadores.length - 1, divCartas);
    if (puntosMinimos > 21) {
      break;
    }
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

  setTimeout(() => {
    determinarGanador(puntosJugadores);
  }, 100);
};