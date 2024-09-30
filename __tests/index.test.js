const sayHello = require('../index');

test('should return "Hola Mundo"', () => {
  expect(sayHello()).toBe("Hola Mundo");
});
