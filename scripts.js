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
			console.log('pairs and ' + vm.num)
			var myRealArray = []
			while (myArray.length > 1) {
				var x = 0
				var name = ""
				while(x < vm.num) {
					var length = myArray.length
					var i = Math.floor(Math.random() * length)
					if (myArray[i]) {
						name = name + " " + myArray[i]
						var length = length -1
						myArray.splice(i, 1)
					}
						if (x == vm.num - 1) {
							myRealArray.push(name)
						}
					x ++
				}
			}
			if (myArray.length != 0) {
				console.log('avril')
				for (var i = 0; i < myArray.length; i++) {
					myRealArray[i] = myRealArray[i] + " " + myArray[i]
				}
			}
			console.log(myRealArray)

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
