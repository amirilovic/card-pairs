import angular from 'angular';
import template from './template.html';
import cardModule from '../card/directive';
import BoardController from './controller';
import rangeModule from '../../filters/range';

export default
  angular
    .module('boardModule', [
      cardModule.name,
      rangeModule.name
    ])
    .directive('board', () => {
      return {
        scope:        {},
        template:     template,
        controllerAs: 'ctrl',
        controller:   BoardController
      };
    });