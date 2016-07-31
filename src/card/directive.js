import angular from 'angular';
import template from './template.html';

export default
  angular
    .module('cardModule', [])
    .directive('card', () => {
      return {
        scope: {
          item: '='
        },
        bindToController: true,
        controller:       () => {},
        controllerAs:     'ctrl',
        template:         template
      };
    });