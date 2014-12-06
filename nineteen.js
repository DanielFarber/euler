var months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
var twentiethCentury = []

for (var year = 1; year < 100; year++) {
  months.forEach(function(month) {
    var feb = month === 28
    var leapYear = year > 3 && year % 4 === 0
    if (feb & leapYear) {
      for (var day = 1; day < 30; day++) {
        twentiethCentury.push(day)
      }
    }
    else {
      for (var day = 1; day <= month; day++) {
        twentiethCentury.push(day)
      }
    }
  })
}

var firstSundays = 0
var i = 1

twentiethCentury.forEach(function(day) {
  var first = day === 1
  var sunday = i % 7 === 0
  if (first && sunday) {
    firstSundays++
  }
  i++
})

console.log(firstSundays)
