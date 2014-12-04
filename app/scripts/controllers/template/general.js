'use strict';

/**
 * @ngdoc function
 * @name crimson.controller:TemplateGeneralCtrl
 * @description
 * # TemplateGeneralCtrl
 * Controller of the crimson
 */
angular.module('crimson')
  .controller('TemplateGeneralCtrl', function ($scope) {

        // ALERTS
        $scope.alerts = [
            { type: 'danger',       title: 'Thats not good', msg: 'Change a few things andsubmitting again.' },
            { type: 'info',         title: 'Be adviced', msg: 'Change a few things andsubmitting again.' },
            { type: 'warning',      title: 'Watch out', msg: 'Change a few things andsubmitting again.' },
            { type: 'success',      title: 'Well done', msg: 'You successfully see alert message.' }
        ];

        $scope.addAlert = function() {
            $scope.alerts.push({title: 'Beware', msg: 'Another alert!'});
        };

        $scope.closeAlert = function(index) {
            $scope.alerts.splice(index, 1);
        };

  });
