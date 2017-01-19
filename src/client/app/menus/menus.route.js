(function() {
  'use strict';

  angular
    .module('app.menus')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'menus',
        config: {
          url: '/menus',
          templateUrl: 'app/menus/menus.view.html',
          controller: 'MenusController',
          controllerAs: 'vm',
          title: 'Menus',
          settings: {
            nav: 3,
            content: '<i class="fa fa-lock"></i> Menus'
          }
        }
      }
    ];
  }
})();
