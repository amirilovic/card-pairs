import angular from 'angular';
import template from './template.html';
import cardModule from '../card/directive';
import BoardController from './controller';
import rangeModule from '../../filters/range';

BoardController.$inject = ['$timeout'];

export default
  angular
    .module('boardModule', [
      cardModule.name,
      rangeModule.name
    ])
    .component('board', {
      template:   template,
      controller: BoardController
    });