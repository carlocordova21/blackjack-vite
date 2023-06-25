import _ from 'underscore';

/**
 * Esta función crea un deck de cartas
 * @param {Array<String>} tiposCarta Ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<String>} valoresCarta Ejemplo: ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposCarta, valoresCarta) => {
  if (!tiposCarta || tiposCarta.length === 0)
    throw new Error('Debe especificar los tipos de carta');

	if (!valoresCarta || valoresCarta.length === 0)
    throw new Error('Debe especificar los valores de carta');

  let deck = [];
  for (let i = 0; i < tiposCarta.length; i++) {
    for (let valor of valoresCarta) {
      deck.push(valor + tiposCarta[i]);
    }
  }
  return _.shuffle(deck);
};
