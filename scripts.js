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
	vm.finalArray = "";
	vm.listType = "groups";

	$scope.setValue = function() {
		if (vm.listType == "groups") {
			vm.text = "How Many People Per Group?"
		} else {
			vm.text = "How Many Teams Should There Be?"
		}
	}
	
	$scope.generate = function() {
		var myArray = vm.array.split(",")
		console.log(myArray)
		if (vm.listType == "groups") {
			console.log('groups and ' + vm.num)
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

			var stringy = ""
			for (i=0; i < myRealArray.length -1 ; i++ ) {
				stringy += myRealArray[i] + " vs "
			}
			stringy += myRealArray[myRealArray.length-1]
			vm.finalArray = stringy

		} 
		else {
			console.log('teams')

			var teams = []
			for (i = 0; i < vm.num; i ++) {
				teams[i] = []
			}

			var length = myArray.length
			for (var i = 0; i < length; i += teams.length) {
				for (var j = 0; j < teams.length; j ++) {
					var tlength = myArray.length
					var k = Math.floor(Math.random() * tlength)
					teams[j].push(myArray[k])
					myArray.splice(k,1)
				}

			}
			var stringy = ""
			for (i=0; i < teams.length -1 ; i++ ) {
				stringy += teams[i] + " vs "
			}
			stringy += teams[teams.length-1]
			vm.finalArray = stringy
			console.log(teams)

		}

	}


}
