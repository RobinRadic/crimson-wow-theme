'use strict';

/**
 * @ngdoc function
 * @name crimson.controller:TemplateButtonsCtrl
 * @description
 * # TemplateButtonsCtrl
 * Controller of the crimson
 */
angular.module('crimson')
  .controller('TemplateButtonsCtrl', function ($scope) {

        // BUTTONS
        $scope.singleModel = 1;

        $scope.radioModel = 'Middle';

        $scope.checkModel = {
            left: false,
            middle: true,
            right: false
        };
  });
