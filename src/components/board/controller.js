import Game from '../../domain/game';

export default class {
  constructor($timeout, localStorageService) {
    this._$timeout = $timeout;
    this._localStorageService = localStorageService;
    this.options = [
      {dimension: 4, title: '4x4'},
      {dimension: 8, title: '8x8'},
      {dimension: -1, title: 'custom'}
    ];    
  }
  createGame(dimension) {
    this._game = dimension === -1 ?
      new Game(this._$timeout, this._localStorageService, parseInt(prompt('dim?'), 10)) : 
      new Game(this._$timeout, this._localStorageService, dimension);
  }
  flip(card) {
    this._game.flip(card);
  }
  get rows() {
    return this._game ? this._game.rows : [];
  }
  get attemptsCount() {
    return this._game ? this._game.attemptsCount : undefined;
  }
}