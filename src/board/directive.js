import angular from 'angular';
import template from './template.html';
import cardModule from '../card/directive';
import BoardController from './controller';

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
    })
    .filter('range', () => {
      return (n) => {
        var res = [];
        for (var i = 0; i < n; i++) {
          res.push(i);
        }
        return res;
      };
    });