require "pry"
array = [nil, "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
				"eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen",
				"nineteen"]
array[20], array[30], array[40], array[50], array[60], array[70], array[80], array[90] =
"twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"


20.upto(99) do |int|
	unless int % 10 === 0
		decade = (int / 10) * 10
		array[int] = array[decade]
		array[int] += array[int - decade]
	end
end

100.upto(999) do |int|
	century = int / 100
	array[int] = array[century] + "hundred"
	unless int % 100 === 0
		array[int] += "and" + array[int % 100]
	end
end

array[1000] = "onethousand"

total = 0

array[1..1000].each { |str| total += str.length }

puts total