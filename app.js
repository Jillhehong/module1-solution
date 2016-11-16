/**
 * Created by hhe on 11/15/2016.
 */

(function () {
    var app = angular.module('LunchCheck', []);
    app.controller('lunchCheckController', myController);
    myController.$inject = ['$scope'];
    function myController($scope){
        $scope.lunchNames = '';
        $scope.lunchMessages = '';
        $scope.showMessage = function () {
            var msg='';
            if(!$scope.lunchNames){
                msg = 'Please enter data first'; //if users input nothing
            }
            if($scope.lunchNames) { //if users did input something including no items in between two commas
                var res = calculateChars($scope.lunchNames);
                console.log(res);
                if(res ==0){
                    msg = 'Please enter data first';
                }
                else if(res <=3) {msg = 'Enjoy';}
                else if(res > 3) { msg = 'Too much';}
            }
            $scope.lunchMessages = msg;
        };
        
        function calculateChars(string){
            var chars =string.split(',');
            var counts = 0;
            for(var i=0;i<chars.length;i++){
                counts ++;
            }
            return counts;
        }
        //set message styles
        $scope.messageStyle = function () {
            var styles;
            if($scope.lunchMessages == "Please enter data first")
            {
                styles={'color': 'red',  'border': '1px solid red'};
            }
            if($scope.lunchMessages == 'Enjoy' || $scope.lunchMessages == 'Too much')
            {
                styles={'color': 'green', 'border': '1px solid green'};
            }
            return styles;
        }
        
    }
})();