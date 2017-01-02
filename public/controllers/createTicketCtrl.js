angular.module('createTicketCtrl', [])
  .controller('createTicketCtrl', createTicketCtrl);

  function createTicketCtrl(ticketService){
      var vm = this;

      //vm.formDataHolder = {};

      vm.submitForm = function(){
        // debugger;
        ticketService.create(vm.ticket)
          .success(function() {
            console.log("ticket created successfully");
          });
      }
  }
