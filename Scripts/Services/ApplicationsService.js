(function () {
    'use strict';

  

    angular.module(LendBot).factory("appService", AppService);
    AppService.$inject = ["$http", "$q"];

    function AppService($http, $q) {
        var srv = {
            GetAll: _getAll,
            Edit: _edit,
            UpdateLock: _updateLock
        }
        return srv;

        function _getAll(pagObject) {
            console.log(pagObject);
            return $http.get("/api/useradmin/" + pagObject.Output + "/" + pagObject.Offset)
                .then(function(response) {
                    return response.data;
                })
                .catch(function(err) {
                    return $q.reject(err);
                });
        }

        function _edit(postModel) {
            console.log('postModel', postModel);
            return $http.put("/api/useradmin/" + postModel.UserId, postModel)
                .then(function(response) {
                    return response.data;
                    console.log(response.data);
                })
                .catch(function(error) {
                    return $q.reject(error);
                });
        }

        function _updateLock(postModel) {
            return $http.put("/api/useradmin/updateLock/" + postModel.id, postModel)
                .then(function(response) {
                    return response.data;
                })
                .catch(function(err) {
                    return $q.reject(err);
                });
        }

    }



})();