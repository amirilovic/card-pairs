import './style.css';
import angular from 'angular';
import template from './template.html';

export default
  angular
    .module('cardModule', [])
    .directive('card', () => {
      return {
        scope: {
          ngModel: '=',
          onFlip:  '&'
        },
        bindToController: true,
        controller:       () => {},
        controllerAs:     'ctrl',
        template:         template
      };
    });