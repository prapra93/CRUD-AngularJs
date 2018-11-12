var app = angular.module("myApp", ['ui.bootstrap']);
app.filter('beginning_data', function() {
    return function(input, begin) {
        if (input) {
            begin = +begin;
            return input.slice(begin);
        }
        return [];
    }
});

app.controller("addController", function($scope, $http, $timeout) {
       //ADD FUNCTION
       $scope.insert = function() {
        $http.post(
            "../controller/insert.php", {
                'names': $scope.names,
                'prices': $scope.prices,
                'companies': $scope.companies,
                'descriptions': $scope.descriptions

            }
        ).success(function(data) {
        $scope.displayData();
        var modal_element = angular.element('#add_new_product_modal');
                modal_element.modal('hide');
       // alert(data);
            $scope.names = null;
            $scope.prices = null;
            $scope.companies = null;
            $scope.descriptions = null;
        });
       }


    //Update
        $scope.update_data = function() {
                $http.post(
                    "../controller/edit.php", {
                        'names': $scope.names,
                        'prices': $scope.prices,
                        'companies': $scope.companies,
                        'descriptions': $scope.descriptions,
                        'idproducts': $scope.idproducts
                    }
                ).success(function(data) {
                    //alert(data);
                    $scope.names = null;
                    $scope.prices = null;
                    $scope.companies = null;
                    $scope.descriptions = null;
                    $scope.displayData();
            var modal_element = angular.element('#modal_update_product');
                        modal_element.modal('hide');
                });
            }

    //CancelUpdate
    $scope.cancelUpdate = function(idproducts, names, prices, companies, descriptions) {
        $scope.idproducts = null;
            $scope.names = null;
            $scope.prices = null;
            $scope.companies = null;
                $scope.descriptions = null;

    }

        //DISPLAY DATA
        $scope.displayData = function() {
            $http.get("display.php")
                .success(function(data) {
                    $scope.productList = data;
            $scope.file = data;
                $scope.current_grid = 1;
                $scope.data_limit = 10;
                $scope.filter_data = $scope.file.length;
                $scope.entire_product = $scope.file.length;
                });
        }

    //Edit
        $scope.updateData = function(idproducts, names, prices, companies, descriptions) {
        $scope.idproducts = idproducts;
            $scope.names = names;
            $scope.prices = prices;
            $scope.companies = companies;
            $scope.descriptions = descriptions;
        var modal_element = angular.element('#modal_update_product');
            modal_element.modal('show');
        }

    $scope.page_position = function(page_number) {
            $scope.current_grid = page_number;
        };
        $scope.filter = function() {
            $timeout(function() {
                    $scope.filter_data = $scope.productList.length;
            }, 20);
        };
        $scope.sort_with = function(base) {
            $scope.base = base;
            $scope.reverse = !$scope.reverse;
        };

        //DELETE FUNCTION
        $scope.delete = function(idproducts) {
            if (confirm("Are you sure you want to delete?")) {
                $http.post("../controller/delete.php", {
                        'idproducts': idproducts
                    })
                    .success(function(data) {
                        $scope.displayData();
                alert(data);
               //$scope.show_data();
                    });
            } else {
                return false;
            }
        }

});

