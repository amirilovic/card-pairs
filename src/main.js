import 'bootstrap/dist/css/bootstrap.css';
import angular from 'angular';
import boardModule from './directives/board/directive';

const cardPairs = angular.module('cardPairs', [
  boardModule.name
]);

angular.element(document).ready(() => {
  angular.bootstrap(document.querySelector('body'), [
    cardPairs.name
  ], {
    strictDi: true
  });
});