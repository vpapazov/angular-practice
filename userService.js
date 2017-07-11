class UserService {
  currentUser() {
    return 'Valeriia';
  }
}
angular.module('myapp').service('userService', UserService)
