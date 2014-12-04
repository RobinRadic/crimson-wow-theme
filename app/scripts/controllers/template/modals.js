'use strict';

/**
 * @ngdoc function
 * @name crimson.controller:TemplateModalsCtrl
 * @description
 * # TemplateModalsCtrl
 * Controller of the crimson
 */
angular.module('crimson')
  .controller('TemplateModalsCtrl', function ($scope, $modal) {

        var ModalInstanceCtrl = function ($scope, $modalInstance, items) {

            $scope.items = items;
            $scope.selected = {
                item: $scope.items[0]
            };

            $scope.ok = function () {
                $modalInstance.close($scope.selected.item);
            };

            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };
        };
            $scope.items = ['item1', 'item2', 'item3'];

            $scope.open = function (size) {

                var modalInstance = $modal.open({
                    templateUrl: 'myModalContent.html',
                    controller: ModalInstanceCtrl,
                    size: size,
                    windowClass: "modal-alea",
                    resolve: {
                        items: function () {
                            return $scope.items;
                        }
                    }
                });

                modalInstance.result.then(function (selectedItem) {
                    $scope.selected = selectedItem;
                }, function () {
                    $log.info('Modal dismissed at: ' + new Date());
                });
            };

  });
