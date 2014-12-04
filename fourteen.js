function countCollatzSeqStepsIn(num) {

	var current = num
	var steps = 1
	var ended = false

	while (!ended) {
		current = returnNextCollatzStep(current)
		steps++
		if (current === 1) {
			ended = true
		}
	}
	return steps
}



function returnNextCollatzStep(num){
	if (num % 2 === 0) {
		return num / 2
	}
	else {
		return (num * 3) + 1
	}
}

var highest = 0
var collatzNum = 0

for (var i = 1; i < 1000001; i++) {
	var result = countCollatzSeqStepsIn(i)
	if (result > highest) {
		collatzNum = i
		highest = result
	}
}
console.log(collatzNum)
console.log(highest)