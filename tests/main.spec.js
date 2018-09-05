var expect = require('chai').expect
var calc = require('../src/main.js')

describe('Calculator', () => {

  //  smoke tests
  describe('Smoke Tests', () => {

    it('should exists the Calculator lib', () => {
      expect(calc).to.exist
    })

    it('should exists method `sum`', () => {
      expect(calc.sum).to.exist
      expect(calc.sum).to.be.a.function
    })

    it('should exists method `sub`', () => {
      expect(calc.sub).to.exist
      expect(calc.sub).to.be.a.function
    })

    it('should exists method `mult`', () => {
      expect(calc.mult).to.exist
      expect(calc.mult).to.be.a.function
    })

    it('should exists method `div`', () => {
      expect(calc.div).to.exist
      expect(calc.div).to.be.a.function
    })

  })

});
