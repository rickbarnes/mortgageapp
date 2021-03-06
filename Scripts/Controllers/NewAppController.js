﻿(function () {
    'use strict'

    angular.module(LendBot).controller("newAppController", NewAppController);
    NewAppController.$inject = ["$scope","appService"];

    function NewAppController($scope) {

        var vm = this;

        vm.appModel = {
            firstName: "",
            lastName: "",
            email: "",
            homePhone: "",
            mobilePhone: "",
            goals: [],
            cashOut: 0,
            newTerm: 30,
            desiredSavings: 0,
            consolidationSum: 0,
            consolidationPayments: 0,
            occupancy: "",
            currentBalance: 0,
            currentRate: 4.5,
            currentTerm: 30,
            currentPayment: 0,
            isCurrentEscrow: true,
            currentEscrowTotal: 0,
            isCurrentPmi: false,
            currentPmiTotal: 0,
            propertyType: "",
            propertyValue: 0,
            fico: "",
            ltv: 0
        };

        vm.calcLtv = function () {
            var ltv = vm.appModel.currentBalance / vm.appModel.propertyValue;
            ltv = (ltv.toFixed(2) * 100);
             vm.appModel.ltv = ltv;
        };

        vm.$onInit = _init;
        vm.calcRates = _calcRates;


        function _init() {
           
        }

        function _calcRates() {

        }



    }
})();