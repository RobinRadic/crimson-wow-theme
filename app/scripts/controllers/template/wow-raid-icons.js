'use strict';

/**
 * @ngdoc function
 * @name crimson.controller:TemplatesWowRaidIconsCtrl
 * @description
 * # TemplatesWowRaidIconsCtrl
 * Controller of the crimson
 */
angular.module('crimson')
  .controller('TemplateWowRaidIconsCtrl', function ($scope) {
        console.log('TemplateWowRaidIconsCtrl');
    $scope.raids = ["MC", "BWL", "AQ20", "AQ40",
        "Kara", "Gruul", "Mag", "ZA", "SSC", "TK", "MH",  "BT", "SWP",
        "Naxx", "OS", "VoA", "EoE", "Uld", "ToC", "Ony", "ICC", "RS",
        "BH", "BoT", "BWD", "ToFW", "FL", "DS",
        "MV", "HoF", "ToES", "ToT", "SoO"];
  });
