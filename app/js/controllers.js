'use strict'

var app = angular.module('demo', []);

app.controller(
    'personController',
    [
        '$scope',
        function ($scope) {
            $scope.persons = [
                {
                    firstName: 'George',
                    lastName: 'Yong',
                    dateOfBirth: '1 January 1987',
                    nationality: 'Malaysia',
                    occupation: 'Programmer',
                    cityOfResidence: 'Petaling Jaya, Selangor, Malaysia'
                },
                {
                    firstName: 'Jarak',
                    lastName: 'Tonguba',
                    dateOfBirth: '11 January 1957',
                    nationality: 'Zambian',
                    occupation: 'Farmer',
                    cityOfResidence: 'Harere East, Harere, Zimbabwe'
                },
                {
                    firstName: 'Hatakushi',
                    lastName: 'Saroshi',
                    dateOfBirth: '19 November 1967',
                    nationality: 'Japanese',
                    occupation: 'Architect',
                    cityOfResidence: 'Shibuya, Tokyo, Japan'
                },
                {
                    firstName: 'Hsiao Loong',
                    lastName: 'Lee',
                    dateOfBirth: '1 January 1987',
                    nationality: 'Singaporean',
                    occupation: 'Politician',
                    cityOfResidence: 'Woodlands, Singapore'
                },
                {
                    firstName: 'Amanda',
                    lastName: 'Siegfried',
                    dateOfBirth: '25 July 1983',
                    nationality: 'American',
                    occupation: 'Lawyer',
                    cityOfResidence: 'Buffalo, New York, USA'
                }
            ];
        }
    ]
);
