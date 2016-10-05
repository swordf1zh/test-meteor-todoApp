import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Tasks } from '../../api/tasks.js';

import template from './todos-list.html';

class TodosListCtrl {
  constructor($scope) {
    $scope.viewModel(this);

    this.helpers({
      tasks() {
        return Tasks.find({});
      }
    });
  }
}

export default angular.module('todosList', [
  angularMeteor
])
  .component('todosList', {
    templateUrl: 'imports/components/todos-list/todos-list.html',
    controller: ['$scope', TodosListCtrl]
  });