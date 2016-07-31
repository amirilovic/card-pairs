import Board from '../../domain/board';

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
  flip(card) {
    this.board.flip(card);
  }
  get rows() {
    return this.board ? this.board.rows : [];
  }
  get attemptsCount() {
    return this.board ? this.board.attemptsCount : undefined;
  }
}