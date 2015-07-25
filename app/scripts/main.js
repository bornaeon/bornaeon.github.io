var Angular = require("angular");
var React = require('react');

var Main = require('./components/root');

angular
    .module("baGithub", [])
    .controller("mainCtrl", ["$scope", "$http", function($scope, $http){
        $http.get("https://api.github.com/users/bornaeon/repos")
            .success(function(d){
                $scope.data = d;
            })
    }])
    .directive("root", function(){
        return{
            restricted: 'E',
            scope: {
                data: '='
            },
            replace: true,
            template: '<div></div>',
            link: function(scope, elm, atr) {
                scope.$watch('data', function(n,o) {
                    if(n) {
                        React.render(<Main data={scope.data} />, elm[0]);
                    }
                });
            }
        }
    });