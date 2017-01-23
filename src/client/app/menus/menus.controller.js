(function() {
  'use strict';

  angular
    .module('app.menus')
    .controller('MenusController', MenusController);

  MenusController.$inject = ['$q', 'dataservice','logger'];
  /* @ngInject */
  function MenusController(logger) {
    var vm = this;
    vm.title = 'Menus';

    activate();

    function activate() {
      logger.info('Activated Menus View');
    }
  }
})();
