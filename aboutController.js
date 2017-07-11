class AboutController {

constructor(userService) {
  this.username = userService.currentUser();
}

 }

angular.module('myapp').controller('AboutController', AboutController);
