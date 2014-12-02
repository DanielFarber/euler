var squaredSum = 0,
		summedSquares = 0


for (var i = 1; i < 101; i++) {
	squaredSum += i
	summedSquares += i * i
}

console.log("summedSquares = " + summedSquares)
console.log("squaredSum = " + (squaredSum * squaredSum))
console.log((squaredSum * squaredSum) - summedSquares)