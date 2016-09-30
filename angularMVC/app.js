'use strict';
var App = angular.module('clientApp', ['ngResource']);
App.controller('ClientCtrl', ['$scope', function ($scope) {
    $scope.selectedCompany = NaN;
    $scope.filtroEmpresa = function (clients, selectedCompany) {
            var tempClients = [];
            if (!angular.isUndefined(clients) && !angular.isUndefined(selectedCompany) && selectedCompany.length > 0) {
                angular.forEach(clients, function (cli) {
                    if (angular.equals(cli.company.id, selectedCompany.id)) {
                        tempClients.push(cli);
                    }
                });
                return tempClients;
            } else {
                return clients;
            }
        };
    $scope.companyList = [{
        id: 1,
        name: 'Apple'
    }, {
        id: 2,
        name: 'Facebook'
    }, {
        id: 3,
        name: 'Google'
    }];

    $scope.clients = [{
        name: 'Brett',
        designation: 'Software Engineer',
        company: {
            id: 1,
            name: 'Apple'
        }
    }, {
        name: 'Steven',
        designation: 'Database Administrator',
        company: {
            id: 3,
            name: 'Google'
        }
    }, {
        name: 'Jim',
        designation: 'Designer',
        company: {
            id: 2,
            name: 'Facebook'
        }
    }, {
        name: 'Michael',
        designation: 'Front-End Developer',
        company: {
            id: 1,
            name: 'Apple'
        }
    }, {
        name: 'Josh',
        designation: 'Network Engineer',
        company: {
            id: 3,
            name: 'Google'
        }
    }, {
        name: 'Ellie',
        designation: 'Internet Marketing Engineer',
        company: {
            id: 1,
            name: 'Apple'
        }
    }];


    $scope.setSelectedClient = function () {
        //var id = $scope.selectedCompany.id;
        //if (_.contains($scope.selectedCompany, id)) {
        //    $scope.selectedCompany = _.without($scope.selectedCompany, id);
        //} else {
        //    $scope.selectedCompany.push(id);
        //}
        //return false;
    };
} ]);

App.filter('byCompanyFilter', function () {
    return function (clients, selectedCompany) {
        var tempClients = [];
        if (!angular.isUndefined(clients) && !angular.isUndefined(selectedCompany)) {
            angular.forEach(clients, function (cli) {
                if (angular.equals(cli.company.id, selectedCompany.id)) {
                    tempClients.push(cli);
                }
            });
            return tempClients;
        } else {
            return clients;
        }
    }
});


//angular.module('App.filters', []).filter('companyFilter', [function () {
//    return function (clients, selectedCompany) {
//        if (!angular.isUndefined(clients) && !angular.isUndefined(selectedCompany) && selectedCompany.length > 0) {
//            var tempClients = [];
//            angular.forEach(selectedCompany, function (id) {
//                angular.forEach(clients, function (client) {
//                    if (angular.equals(client.company.id, id)) {
//                        tempClients.push(client);
//                    }
//                });
//            });
//            return tempClients;
//        } else {
//            return clients;
//        }
//    };
//}]);