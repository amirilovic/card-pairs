export default class {
  constructor() {
    this.cards = [];
    this.boards = [
      {dimension: 4, name: '4x4'},
      {dimension: 8, name: '8x8'},
      {dimension: -1, name: 'custom'}
    ];
    this.selectedBoard = this.boards[0];
    this.createBoard(this.selectedBoard.dimension);
  }
  createBoard(dimension) {
    if(dimension === -1) {
      this.dimension = parseInt(prompt('dim?'), 10);
    } else {
      this.dimension = dimension;
    }
    this.createCards(this.dimension);
  }
  createCards(dimension) {
    for(let card = 1; card <= (dimension * dimension) / 2; card++) {
      this.cards.push({
        label: card,
        open:  false
      });
      this.cards.push({
        label: card,
        open:  false
      });
    }
  }
}