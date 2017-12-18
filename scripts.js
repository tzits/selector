console.log('logic checked')

angular
  .module('selector', [])
  .controller("ListController", ListController)

function ListController($scope) {
	var vm = this;
	vm.array = "List Names Here Separated By Commas"
	vm.include = true
	vm.text = "How Many Teams Should There Be?"
	vm.num = 2
	vm.listType
	vm.finalArray = []

	$scope.pushed = function() {
		alert(vm.num)
	}

	$scope.setValue = function() {
		if (vm.listType == "pairs") {
			vm.text = "How Many People Per Group?"
		} else {
			vm.text = "How Many Teams Should There Be?"
		}
	}
	
	$scope.generate = function() {
		var myArray = vm.array.split(",")
		console.log(myArray)
		if (vm.listType == "pairs") {
			console.log('pairs')

		} 
		else {
			console.log('teams')
		}
		// if (vm.value == "pairs") {
			
		// 	}
		// console.log(name)
		// }
	}


}
