(function () {
angular.module('public')
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ['MenuService','UserService'];
function RegistrationController(MenuService, UserService) {
  var reg = this;
  reg.error = false;
  reg.complete = false;

  reg.submit = function () {
    console.log('submit');
    console.log(reg.user.favorite);
    var promise = MenuService.getMenuItem(reg.user.favorite);
    promise.then(function(response) {
       console.log('then');
       reg.error = false;
       reg.complete = true;
       console.log(reg.user.firstname);
       UserService.registerUserData({
               firstname: reg.user.firstname,
               lastname: reg.user.lastname,
               email: reg.user.email,
               phone: reg.user.phone,
               favorite: reg.user.favorite,
             })

     }).catch(function(error) {
       console.log('fail');
       reg.error = true;
       reg.complete = false;
    });

  };
}

})();
