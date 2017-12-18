console.log('app.js loaded!')

angular
  .module('selector', [])
  .controller("ListController", ListController)

function ListController($scope) {
	var vm = this;
	vm.value = "asdf"
	vm.include = true
	console.log(vm.value)
	vm.text = "How Many Teams Should There Be?"
	vm.num = 2
	$scope.pushed = function() {
		vm.num = 
		alert(vm.num)
	}
	$scope.setValue = function(val) {
		vm.value = val
		console.log(vm.value)
		if (vm.value == "pairs") {
			vm.text = "How Many People Per Group?"
		} else {
			vm.text = "How Many Teams Should there be?"
		}
	}
	
	$scope.setNum = function() {
		console.log("num")
	}
	
	$scope.generate = function() {
		if (vm.value == "pairs") {
			var x = 0
			var name = ""
				while (x < 2) {
				var length = array.length
				var i = Math.floor(Math.random() * length)
				name = name + " " + array[i]
				var length = length -1
				array.splice(i, 1)
				x ++
			}
		console.log(name)
		}
	}


}

function randomName() {
	var x = 0
	var name = ""
	while (x < 2) {
		var length = array.length
		var i = Math.floor(Math.random() * length)
		name = name + " " + array[i]
		var length = length -1
		array.splice(i, 1)
		x ++
	}
	console.log(name)
}

