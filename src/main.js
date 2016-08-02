import 'bootstrap/dist/css/bootstrap.css';
import angular from 'angular';
import boardModule from './components/board/component';

angular.element(document).ready(() => {
  angular.bootstrap(document.querySelector('body'), [
    boardModule.name
  ], {
    strictDi: true
  });
});