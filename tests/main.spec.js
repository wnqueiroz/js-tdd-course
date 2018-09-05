describe('Main', () => {
  let array = [];

  // roda uma vez antes do bloco
  before(() => {

  });

  // roda uma vez depois do bloco
  after(() => {

  });

  // roda todas as vezes, antes de CADA bloco
  beforeEach(() => {
    array = [1, 2, 3]
  });

  // roda todas as vezes, depois de CADA bloco
  afterEach(() => {

  });

  it('should have a size of 4 when push another value to the array', () => {
    array.push(4)
    console.log(array.length)
  });

  it('should a size of 2 when pop a value from the array', () => {
    array.pop()
    console.log(array.length)
  });

  it('should remove the value 3 when use pop in the array', () => {
    console.log(array.pop() === 3) // true
  });
});
