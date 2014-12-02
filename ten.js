function isPrime(num) {
	var iterator = Math.floor(Math.sqrt(num))
	for (var i = iterator; i > 1; i--) {
		if (num % i === 0) {
			return false
		}
	}
	return true
}


var total = 2

for (var i = 3; i < 2000000; i++) {
	if (isPrime(i)) {
		total += i
	}
}

console.log(total)