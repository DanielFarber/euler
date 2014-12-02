var total = 0
var first = 1
var second = 1
var shunt

while (first < 4000000) {
	if (first % 2 == 0) {
		total += first
	}

	shunt = first
	first = first + second
	second = shunt
}

console.log(total)
