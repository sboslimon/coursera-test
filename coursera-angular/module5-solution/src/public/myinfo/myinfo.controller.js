(function () {
angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['UserService','ApiPath'];
function MyInfoController(UserService,ApiPath) {
  var myinfo = this;
  myinfo.login_error = false;
  myinfo.basePath = ApiPath;

  console.log("My info controller");

    if (UserService.isLoggedIn()){
      myinfo.userdata = UserService.getUserData();
      console.log(myinfo.userdata);
      myinfo.login_error = false;
    }
    else{
      console.log("logging failed");
      myinfo.login_error = true;
    }

}

})();
