var array = ["Andrew","Ruby","Justin","Dezwon","Jacob","Ramar","Ellana","Clara","Jared","Dalton"]
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