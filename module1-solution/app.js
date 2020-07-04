(function(){
    'use strict';

    angular.module('LunchCheck',[])
    .controller('LunchCheckController',LunchCheckController);
    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController ($scope) {
      $scope.items= ""; 
      $scope.message="";
      $scope.wordcount=0;

      $scope.checkItems = function (){
          var words = $scope.items.split(' ');
          $scope.wordcount= $scope.items.split(' ').length;
          $scope.message= message(words);
          

          function message (count){

            if(words == "") {
              return "Please enter data first";
            }
   
            else if (words.length <=3) {
              return "Enjoy!";
              
            }
            else if (words.length >=4) {
              return "Too much!";
            }    

          };
         
      };

    }
})();