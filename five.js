function qualifies(num) {
	for (var i = 1; i < 21; i++) {
		if (num % i !== 0) {
			return false
		}
	}
	return true
}

var output = false
var i = 2520

while (!output) {
	if (qualifies(i)) {
		output = i
	}
	else {
		i++
	}
}

console.log(output)