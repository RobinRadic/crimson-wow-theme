'use strict';

/**
 * @ngdoc function
 * @name crimson.controller:TemplateNavCtrl
 * @description
 * # TemplateNavCtrl
 * Controller of the crimson
 */
angular.module('crimson')
  .controller('TemplateNavCtrl', function ($scope, $state) {
        $state.includes('template.typo');
  });
