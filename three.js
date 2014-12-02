var targ = 600851475143

var largestPossible = Math.floor(Math.sqrt(targ))
var arr = []


for (var i = 2; i <= largestPossible; i++) {
	if (targ % i === 0 ) {
		arr.push(i)
		arr.push(targ / i)
	}
}
var total = 0

arr.forEach(function(factor) {
	if (isPrime(factor) && factor > total) {
		total = factor
	}
})

function isPrime(num) {
	var iterator = Math.floor(Math.sqrt(num))
	for (var i = iterator; i > 1; i--) {
		if (num % i === 0) {
			return false
		}
	}
	return true
}

console.log(total)