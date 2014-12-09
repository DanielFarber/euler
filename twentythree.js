var abundants = []

function getDivisorsOf(num) {
	var divisors = [1], root = Math.sqrt(num)
	for (var i = 2; i < root; i++) {
		if (num % i === 0) {
			divisors.push(i, num / i)
		}
	}
	if (num % root === 0) {
		divisors.push(root)
	}
	return divisors.sort()
}

function sumArray(arr) {
	var output = 0
	arr.forEach(function(num) {
		output += num
	})
	return output
}

for (var i = 2; i < 28124; i++) {
	var divisorSum = sumArray(getDivisorsOf(i))
	if (divisorSum > i) {
		abundants.push(i)
	}
}

var abundantSums = []

abundants.forEach(function(first) {
	abundants.forEach(function(second) {
		var sum = first + second
		abundantSums[sum] = true
	})
})

var last = 0
var total = 0
for (var i = 1; i < 28124; i++) {
	if (!abundantSums[i]) {
		total += i
		last = i
	}
}

console.log(total)
console.log(last)
