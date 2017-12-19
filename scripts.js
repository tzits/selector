console.log('logic checked')

angular
  .module('selector', [])
  .controller("ListController", ListController)

function ListController($scope) {
	var vm = this;
	vm.array = [];
	vm.include = true;
	vm.text = "How Many People Per Group?";
	vm.num = 2;
	vm.listType;
	vm.finalArray = [];
	vm.listType = "pairs";

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
			if (myArray.length != 0 && vm.include == true) {
				console.log('avril')
				for (var i = 0; i < myArray.length; i++) {
					myRealArray[i] = myRealArray[i] + " " + myArray[i]
				}
			}
			console.log(myRealArray)

		} 
		else {
			console.log('teams')
			// // array creation
			// for (var i = 0; i < vm.num; i ++) {
			// 	var array = []
			// 	console.log('we made an array!')
			// }
			var teamOne = []
			var teamTwo = []
			var length = myArray.length
			for (var i = 0; i < length; i++) {
				var nL = myArray.length
				var math = Math.floor(Math.random()* nL)
				if (i % 2 == 0) {
					teamOne.push(myArray[math]);
				} else {
					teamTwo.push(myArray[math]);
				}
				myArray.splice(math,1)
			}
			console.log(teamOne)
			console.log(teamTwo)

		}
		// if (vm.value == "pairs") {
			
		// 	}
		// console.log(name)
		// }
	}


}
