/**
 * Esta función debe tomar un deck de cartas y retornar la última carta.
 * @param {Array<String>} deck deck de cartas
 * @returns {Array<String>} retorna nuevo deck sin la última carta 
 */
export const pedirCarta = (deck) => {
	if (!deck || deck.length === 0) throw 'No hay cartas en el deck';
  
  if (deck.length === 0) {
    throw 'No hay cartas en el deck';
  }
  return deck.pop();
};