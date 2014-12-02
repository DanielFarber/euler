var pals = []
var total = 0

for (var i = 999; i > 100; i--) {
	for (var j = i; j > 100; j--) {
		var str = (i * j).toString()
		if (str === reverseString(str)) {
			pals.push(parseInt(str))
		}
	}
}

function reverseString(str) {
	var output = ""
	for (var i = (str.length - 1); i > -1; i--) {
		output += str[i]
	}
	return output
}

pals.forEach(function(product) {
	if (product > total) {
		total = product
	}
})

console.log(total)