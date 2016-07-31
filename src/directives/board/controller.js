import Board from '../../models/board';

export default class {
  constructor() {
    this.options = [
      {dimension: 4, name: '4x4'},
      {dimension: 8, name: '8x8'},
      {dimension: -1, name: 'custom'}
    ];    
  }
  createBoard(dimension) {
    if(dimension === -1) {
      this.board = new Board(parseInt(prompt('dim?'), 10));
    } else {
      this.board = new Board(dimension);
    }
  }
  onFlip(card) {
      card.open = true;
  }
}