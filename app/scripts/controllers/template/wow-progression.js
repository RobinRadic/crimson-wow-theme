'use strict';

/**
 * @ngdoc function
 * @name crimson.controller:TemplateWowProgressionCtrl
 * @description
 * # TemplateWowProgressionCtrl
 * Controller of the crimson
 */
angular.module('crimson')
    .controller('TemplateWowProgressionCtrl', function ($scope) {
        $scope.wowProgressionOptions = {
            raiders: {
                'all': ['Strawbrrykek', 'Planarity', 'Depravity', 'Coras', 'Dimnir', 'Ranged', 'Davesko', 'Lupio', 'Mistymus'],
                'mists': ['Planarity']
            }
        }
    });
