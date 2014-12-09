var fs = require("fs")

var text = fs.readFileSync("names.txt").toString()

var names = text.split("\"").join("").split(",")

var sortedNames = [names[0]]


names.slice(1, names.length).forEach(function(name) {
	var seated = false
	sortedNames.map(function(listName, index, thisArr) {
		if (!seated && name < listName) {
			seated = true
			thisArr.splice(index, 0, name)
		}
		else if (index == thisArr.length - 1) {
			thisArr.push(name)
		}
	})
})

console.log(sortedNames.slice(26, 50))