'use strict';

/**
 * @ngdoc function
 * @name crimsonApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the crimsonApp
 */
angular.module('crimson')
    .controller('MainCtrl', function ($scope, battleNetApi, Restangular, $rootScope) {
        var baseMenus = Restangular.all('menus');
        $rootScope.menus = {};
        baseMenus.getList().then(function(menus){
            menus.forEach(function(menu){
                $rootScope.menus[menu['slug']] = menu.items;
            });
        });

        console.log($rootScope);

        $scope.includes = {
            templateNav: 'views/template.nav.html'
        };

        battleNetApi.wow.character.progression({ name: "Strawbrrykek", realm: "Hellfire" }).then(function( response ) {
            console.log('Wow progress', response);
        });
        battleNetApi.wow.character.profile({ name: "Strawbrrykek", realm: "Hellfire" }).then(function( response ) {
            console.log('Wow char', response);
        });
    })
    .controller('IndexCtrl', function ($scope) {

    })
    .service('WoW', function(){
        var service = {};

    });
