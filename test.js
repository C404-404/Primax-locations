const expect = require('chai').expect                                                                                                        
const primaxGasStation = require('..').default;

describe("#primaxStation", function () {
  it("Retornar -1 si hay espacio sin cobertura", function () {
    const major = primaxGasStation(40, 3);
    expect(mayor).to.equal();
  });
  it("Se deben eliminar una o algunas de las estaciones de Gas", function () {
    const minor = primaxGasStation(10, 6);
    expect(minor).to.equal();
  });
  it("Toda el camino está cubierto de estaciones de gas sin interferencia", function () {
    const covered = primaxGasStation(50, 10);
    expect(covered).to.equal();
  });
});

mocha.setup('tdd');

mocha.setup({
  ui: 'tdd'
});

mocha.setup({
  allowUncaught: true,
  asyncOnly: true,
  bail: true,
  checkLeaks: true,
  forbidOnly: true,
  forbidPending: true,
  global: ['MyLib'],
  retries: 3,
  slow: '100',
  timeout: '2000',
  ui: 'bdd'
});