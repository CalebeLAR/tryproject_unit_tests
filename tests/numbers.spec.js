/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const numbers = require('../src/numbers');

/*
  A função `numbers` recebe um array de tamanho variável e retorna `true` se todos os parâmetros forem do tipo 'number' e `false` caso contrário.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, 'a']; [].
  Comportamento:
    - numbers([2, 3, 4]); // Retorna: true
    - numbers([2, 'errado', 5]); // Retorna: false

*/

describe('2 - Implemente os casos de teste para a função `numbers`', () => {
  it('Verifica se quando a função retorna true quando recebe como parametro o array [1, 2, 3, 4, 5]', () => {
    expect(numbers([1, 2, 3, 4, 5])).toBe(true);

  });
  it('Verifica se quando a função retorna false quando recebe como parametro o array [1, 2, "3", 4, 5] ', () => {
    expect(numbers([1, 2, '3', 4, 5])).toBe(false);

  });
  it('Verifica se quando a função retorna false quando recebe como parametro o array [1, "a", 3] ', () => {
    expect(numbers([1, 2, '3', 4, 5])).toBe(false);


  });
  it('Verifica se quando a função retorna false quando recebe como parametro o array [" "] ', () => {
    expect(numbers([' '])).toBe(false);

  });

});
