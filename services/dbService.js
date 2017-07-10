angular.module('dbService',[])
.service('db',function ($http) {
this.getData = function () {
return  $http({
    method : "get",
    url : "https://raw.githubusercontent.com/Danilovesovic/bands/master/bands.json"
  
  })
}
})
