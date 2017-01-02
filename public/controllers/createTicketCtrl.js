angular.module('createTicketCtrl', [])
  .controller('createTicketCtrl', createTicketCtrl);

  function createTicketCtrl(ticketService){
      var vm = this;

      vm.formDataHolder = {};

      vm.submitForm = function(){
        ticketService.create(vm.formDataHolder)
          .success(function() {
            console.log("ticket created successfully");
            console.log(vm.formDataHolder.createdBy);
          });
      }
  }
