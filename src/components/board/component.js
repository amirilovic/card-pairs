import angular from 'angular';
import template from './template.html';
import cardModule from '../card/component';
import BoardController from './controller';

BoardController.$inject = ['$timeout'];

export default
  angular
    .module('boardModule', [
      cardModule.name
    ])
    .component('board', {
      template:   template,
      controller: BoardController
    });