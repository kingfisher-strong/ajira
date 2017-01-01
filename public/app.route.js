angular.module('frontRoutes', ['ui.router'])
  .config(["$stateProvider", "$urlRouterProvider",
        function($stateProvider, $urlRouterProvider){
          $urlRouterProvider.otherwise('/');

          $stateProvider

          .state('home', {
            url : '/',
            templateUrl : 'views/home.html',
            controller : 'homeCtrl as vm'
          })

          .state('createTicket', {
            ulr: '/createTicket',
            templateUrl: '/views/createTicket.html',
            controller : 'createTicketCtrl as vm'
          });
        }]);
