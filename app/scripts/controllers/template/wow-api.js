'use strict';

angular.module('crimson')
  .controller('TemplateWowApiCtrl', function ($scope, Main, bnetApi, $timeout) {

        // Get a character
        $scope.character = bnetApi.request('character/hellfire/strawbrrykek', function(data){
            $scope.character = data;
        });

  });
