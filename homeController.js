class HomeController {

constructor(userService) {
   this.username = userService.currentUser();
 }
}

angular.module('myapp').controller('HomeController', HomeController);
