function divisorsIn(num) {
	var count = 0
	for (var i = 1; i <= Math.floor(Math.sqrt(num)) - 1; i++) {
		if (num % i === 0) {
			count += 2
		}
	}
	if (Math.floor(Math.sqrt(num)) === Math.sqrt(num)) {
		count++
	}
	return count
}

var i = 0
var tri = 0
var val = 0
while (val < 501) {
	i++
	tri += i
	val = divisorsIn(tri)
}

console.log(tri)
