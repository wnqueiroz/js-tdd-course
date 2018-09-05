var expect = require('chai').expect

describe('Main', () => {
  let array = [];

  // roda todas as vezes, antes de CADA bloco
  beforeEach(() => {
    array = [1, 2, 3]
  });

  // testar tipos ou se existe (smoke test)
  it('should be an array', () => {
    expect(array).to.be.an('array')
  })

  it('should have a size of 4 when push another value to the array', () => {
    array.push(4)
    expect(array).to.have.lengthOf(4);
  });

  it('should return true when pop 3 from the array', () => {
    expect(array.pop() === 3).to.be.true
  });

  it('should a size of 2 when pop a value from the array', () => {
    array.pop()
    expect(array).to.have.lengthOf(2);
  });

  it('should remove the value 3 when use pop in the array', () => {
    array.pop() === 3
    expect(array).to.not.include(3)
  });

});
