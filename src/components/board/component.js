import angular from 'angular';
import template from './template.html';
import cardModule from '../card/component';
import BoardController from './controller';
import angularLocalStorage from 'angular-local-storage';

BoardController.$inject = ['$timeout', 'localStorageService'];

export default
  angular
    .module('boardModule', [
      cardModule.name,
      angularLocalStorage
    ])
    .component('board', {
      template:   template,
      controller: BoardController
    });