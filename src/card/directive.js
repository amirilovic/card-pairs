import angular from 'angular';
import template from './template.html';

export default
  angular
    .module('cardModule', [])
    .directive('card', () => {
      return {
        template: template
      };
    });