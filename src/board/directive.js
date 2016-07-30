import angular from 'angular';
import template from './template.html';
import cardModule from '../card/directive';

class BoardController {
  constructor() {
    this.board = 4;
    this.dimension = {
      rows: 4,
      cols: 4
    };
  }
  createBoard(dimension) {
    this.dimension = dimension;
  }
  createCustomBoard() {
    this.createBoard({
      rows: parseInt(prompt('rows?'), 10),
      cols: parseInt(prompt('cols?'), 10)
    });
  }
  getArray(length) {
    return [...Array(length).keys()];
  }
}

export default
  angular
    .module('boardModule', [
      cardModule.name
    ])
    .directive('board', () => {
      return {
        template:     template,
        controllerAs: 'ctrl',
        controller:   BoardController
      };
    });