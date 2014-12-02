var nums = []
var squares = []
for (var i = 1; i < 1000; i++) {
	squares.push(Math.pow(i, 2))
	nums.push(i)
}

function qualifies(a, b, c) {
	return (Math.pow(a, 2) * Math.pow(b, 2) === Math.pow(c, 2))
}

var trios = []

squares.forEach(function(a) {
	squares.forEach(function(b) {
		if (squares.indexOf(a + b) > -1) {
			trios.push({a: a, b: b, c: a + b})
		}
	})
})

var prod = 0

trios.forEach(function(triplet) {
	if (Math.sqrt(triplet.a) + Math.sqrt(triplet.b) + Math.sqrt(triplet.c) === 1000) {
		prod =  (Math.sqrt(triplet.a) * Math.sqrt(triplet.b) * Math.sqrt(triplet.c))
	}
})

console.log(prod)