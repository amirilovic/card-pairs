import './style.css';
import angular from 'angular';
import template from './template.html';
import {CardStatus} from '../../domain/card';

export default
  angular
    .module('cardModule', [])
    .component('card', {
      bindings: {
        item:   '=',
        onFlip: '&'
      },
      controller: function() {
        this.CardStatus = CardStatus;
      },
      template: template
    });