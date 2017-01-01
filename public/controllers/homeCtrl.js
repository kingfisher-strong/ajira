angular.module('homeCtrl', [])
  .controller('homeCtrl', homeCtrl);

  function homeCtrl(){
    var vm = this;
    vm.message = 'this is home page';
  }
