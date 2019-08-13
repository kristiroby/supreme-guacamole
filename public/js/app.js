const app = angular.module('guac', []);

app.controller('mainController', ['$http', function($http){
  const controller = this;
    this.createGuac = () => {
      $http({
        method: 'POST',
        url: '/guac',
        data: {

        }
      }).then(function(response){

      }, function(error){
        console.log(error);
      })
    }
    this.getGuac = () => {
      $http({
        method: 'GET',
        url: '/guac'
      }).then(function(response){
        this.guac = response.data;
      }, function(error){
        console.log(error);
      })
    }
    this.deleteGuac = () => {
      $http({
        method: "DELETE"
        url: '/guac/' + guac._id
      }).then(function(){
        controller.getGuac();
      })
    }
    this.editGuac = () => {
      $http({
        method: 'PUT',
        url: '/guac/' + guac._id,
        data: {

        }
      }).then(function(response){
        controller.getGuac();
      }, function(error){
        console.log(error);
      })
    }
    controller.getGuac();
}])
