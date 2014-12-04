'use strict';

/**
 * @ngdoc overview
 * @name crimsonApp
 * @description
 * # crimsonApp
 *
 * Main module of the application.
 */
var app = angular
    .module('crimson', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngTouch',
        'ui.bootstrap',
        'ui.router',
        'ui.utils',
        'restangular',
        'ngBattleNet'
    ]);
app.config(function (battleNetConfigProvider, $stateProvider, $urlRouterProvider, RestangularProvider) {
    battleNetConfigProvider.setApiKey("5jjthkbew9yw3a69mgqzkdnyrww35srw");
    battleNetConfigProvider.setDefaultRegion("eu");

    RestangularProvider.setBaseUrl('http://localhost:3000');

    //RestangularProvider.setDefaultHeaders({token: "x-restangular"});

    $urlRouterProvider.otherwise('/');
    $stateProvider.state('index', {
        url: '/',
        views: {
            menu: { templateUrl: 'views/nav.html' },
            main: { templateUrl: 'views/main.html' }
        }
    });

    function ucfirst(str) {
        str += '';
        var f = str.charAt(0)
            .toUpperCase();
        return f + str.substr(1);
    }

    angular.forEach(crimsonDemo.states, function(val, key){
        console.log(val, key);
        $stateProvider.state(key, {
            url: 'Template' + key,
            views: {
                menu: {templateUrl: 'views/nav.html'},
                main: {templateUrl: val, controller: 'Template' + key + 'Ctrl'}
            }
        })
    })
});
