angular.module('createTicketCtrl', [])
  .controller('createTicketCtrl', createTicketCtrl);

  function createTicketCtrl(){
      var vm = this;
      vm.message = "this page is for adding new tickets";
  }
