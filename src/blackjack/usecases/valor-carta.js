/**
 * Esta funcion calcula el valor de la carta y le asigna el valor correspondiente	
 * @param {String} carta nombre de la carta 
 * @returns {Number} valor de la carta
 */
export const valorCarta = (carta) => {
  let valor = carta.substring(0, carta.length - 1);
  return isNaN(valor) ? (valor === 'A' ? 11 : 10) : valor * 1;
};