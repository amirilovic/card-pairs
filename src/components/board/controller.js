import Board from '../../models/board';

export default class {
  constructor($timeout) {
    this.$timeout = $timeout;
    this.options = [
      {dimension: 4, title: '4x4'},
      {dimension: 8, title: '8x8'},
      {dimension: -1, title: 'custom'}
    ];    
  }
  createBoard(dimension) {
    this.board = dimension === -1 ?
      new Board(this.$timeout, parseInt(prompt('dim?'), 10)) : 
      new Board(this.$timeout, dimension);
  }
  getCard(row, col) {
    return this.board.cards[row * this.board.dimension + col];
  }
  flip(card) {
    this.board.flip(card);
  }
  get dimension() {
    return this.board ? this.board.dimension : 0;
  }
}