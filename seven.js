var primes = [2, 3, 5, 7, 11, 13]

var i = 14

while (primes.length < 10001) {
	if (isPrime(i)) {
		primes.push(i)
	}
	i++
}

console.log(primes[10000])



function isPrime(num) {
	var iterator = Math.floor(Math.sqrt(num))
	for (var i = iterator; i > 1; i--) {
		if (num % i === 0) {
			return false
		}
	}
	return true
}