angular.module('homeCtrl', [])
  .controller('homeCtrl', homeCtrl);

  function homeCtrl($http, ticketService){
    var vm = this;
    vm.message = 'this is home page';

    ticketService.all().success(function(data){
      vm.tickets = data;
    });
  };
