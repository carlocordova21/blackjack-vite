import { acumularPuntos, crearDeck, crearCarta, pedirCarta, turnoComputadora } from "./usecases";

let deck = [],
  tipos = ['C', 'D', 'H', 'S'],
  valores = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

let puntosJugadores = [];

//Referencias HTML
const btnNuevo = document.querySelector('#btnNuevo'),
  btnPedir = document.querySelector('#btnPedir'),
  btnDetener = document.querySelector('#btnDetener');

const puntosHTML = document.querySelectorAll('.puntos'),
  divCartas = document.querySelectorAll('.seccion-cartas');

// Inicializar juego
const inicializarJuego = (numJugadores = 2) => {
  deck = crearDeck(tipos, valores);
  puntosJugadores = [];
  for (let i = 0; i < numJugadores; i++) {
    puntosJugadores.push(0);
  }
  btnPedir.disabled = false;
  btnDetener.disabled = false;
};

btnPedir.addEventListener('click', () => {
  const carta = pedirCarta(deck);
  let puntosJugador = acumularPuntos(carta, 0, puntosJugadores, puntosHTML);
  crearCarta(carta, 0, divCartas);

  if (puntosJugador > 21) {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
		turnoComputadora(puntosJugadores[0], deck, puntosJugadores, puntosHTML, divCartas);
  } else if (puntosJugador === 21) {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
		turnoComputadora(puntosJugadores[0], deck, puntosJugadores, puntosHTML, divCartas);
  }
});

btnNuevo.addEventListener('click', () => {
  deck = [];
  inicializarJuego();
  divCartas.forEach((elem) => (elem.innerHTML = ''));
  puntosHTML.forEach((elem) => (elem.innerHTML = 0));
  btnPedir.disabled = false;
  btnDetener.disabled = false;
});

btnDetener.addEventListener('click', () => {
  btnPedir.disabled = true;
  btnDetener.disabled = true;
  turnoComputadora(puntosJugadores[0], deck, puntosJugadores, puntosHTML, divCartas);
});
