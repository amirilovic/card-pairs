import './style.css';
import angular from 'angular';
import template from './template.html';

export default
  angular
    .module('cardModule', [])
    .component('card', {
      bindings: {
        item:   '=',
        open:   '<',
        onFlip: '&'
      },
      template: template
    });