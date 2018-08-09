describe('Main', () => {
  describe('Method A', () => {
    context('Case 1', () => {
      it.skip('should happen bla bla bla', () => {
        // espera que aconteça
        // Entrada de dados / método sum(2, 2)
        // Espera retornar (4) => true |  (3) => false
        throw new Error('just an error');
      });
    });
    context('Case 2', () => {
      it('should happen bla bla bla', () => {
        // espera que aconteça
        // Entrada de dados / método sum(2, 2)
        // Espera retornar (4) => true |  (3) => false
        throw new Error('just another error');
      });
    });
  });
  describe('Method B', () => {});
});
