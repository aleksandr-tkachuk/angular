angular.module("app",[]);
angular.module("app").controller('SettingsController1', SettingsController1);
angular.module("app").controller('SettingsController2', SettingsController2);
function SettingsController1($scope) {
    this.name = 'John Smith';
    $scope.name = 'Vasya';

}
function SettingsController2($scope) {
    var self = this;
    this.names = [];
    this.addName = function(name){
        self.names.push(name);
    };

    this.deleteName = function(id){
        self.names.splice(id,1);
    };

    this.list=['Hell','world','this','angular'];
}