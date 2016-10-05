import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './todos-list.html';

class TodosListCtrl {
  constructor() {
    this.tasks = [{
      text: 'This is task 1'
    }, {
      text: 'This is task 2'
    }, {
      text: 'This is task 3'
    }];
  }
}

export default angular.module('todosList', [
  angularMeteor
])
  .component('todosList', {
    templateUrl: 'imports/components/todos-list/todos-list.html',
    controller: TodosListCtrl
  });