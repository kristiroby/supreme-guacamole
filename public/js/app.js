const app = angular.module('guac', []);

app.controller('mainController', ['$http', function($http){
  const controller = this;
    this.createGuac = () => {
      $http({
        method: 'POST',
        url: '/guac',
        data: {
          name: this.name,
          description: this.description,
          image: this.image,
          ingredients: this.ingredients,
          category: this.category
        }
      }).then(function(response){
        controller.getGuac();
      }, function(error){
        console.log(error);
      })
    }
    this.getGuac = () => {
      $http({
        method: 'GET',
        url: '/guac'
      }).then(function(response){
        controller.guac = response.data;
      }, function(error){
        console.log(error);
      })
    }
    this.deleteGuac = (guac) => {
      $http({
        method: "DELETE",
        url: '/guac/' + guac._id
      }).then(function(){
        controller.getGuac();
      })
    }
    this.editGuac = (guac) => {
      $http({
        method: 'PUT',
        url: '/guac/' + guac._id,
        data: {
          name: this.updatedName,
          description: this.updatedDescription,
          image: this.updatedImage,
          ingredients: this.updatedIngredients,
          category: this.updatedCategory
        }
      }).then(function(response){
        controller.getGuac();
      }, function(error){
        console.log(error);
      })
    }
    controller.getGuac();
}])
