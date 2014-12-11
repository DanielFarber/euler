var arr = []

for (var i = 2; i < 1000; i++) {
	var val = 1 / i
	if (val.toString().length > 15) {
		var got = divideToFiveThousandDecimalPlaces({dend: 1, vis: i, i: 1, out: ""})
		while (got.out[0] === "0") {
			got.out = got.out.substring(1, 99)
		}
		arr.push([got.out, i])
	}
}

function detectPattern(frac) {
	var mid = Math.floor(frac.length / 2)
	for (var i = 1; i <= mid; i++) {
		var first = frac.slice(0, i), sec = frac.slice(i, i + i)
		if (first === sec) {
			return i
		}
	}
	return false
}

var highest = 0
var output = 0

arr.forEach(function(arr) {
	var pat = detectPattern(arr[0])
	if (pat && pat >= highest) {
		highest = pat
		output = arr[1]
	}
})

console.log(output)

function divideToFiveThousandDecimalPlaces(hash) {
	hash.dend *= 10
	while (hash.vis > hash.dend) {
		hash.dend *= 10
		if (hash.i !== 1) {hash.out += "0"}
	}
	hash.out += parseInt(hash.dend / hash.vis)
	hash.dend = hash.dend % hash.vis
	hash.i += 1
	if (hash.i < 5000) {
		hash = divideToFiveThousandDecimalPlaces(hash)
	}
	return hash
}

