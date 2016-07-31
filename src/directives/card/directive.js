import './style.css';
import angular from 'angular';
import template from './template.html';

export default
  angular
    .module('cardModule', [])
    .directive('card', () => {
      return {
        scope: {
          item:   '=',
          open:   '<',
          onFlip: '&'
        },
        bindToController: true,
        controller:       () => {},
        controllerAs:     'ctrl',
        template:         template
      };
    });