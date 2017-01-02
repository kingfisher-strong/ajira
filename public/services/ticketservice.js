angular.module('ticketService',[])
  .factory('ticketService', function($http){
    var ticketFactory = {};


    ticketFactory.all = function(){
      return $http.get('/api/tickets/');
    };
    ticketFactory.create = function(ticketData){
      return $http.post('/api/tickets/', ticketData);
    };

    return ticketFactory;
  });
