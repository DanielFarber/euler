function factorialize(num) {
	var output = 1
	for (var i = num; i > 1; i--) {
		output = i * output
	}
	return output
}

var test = factorialize(100)
