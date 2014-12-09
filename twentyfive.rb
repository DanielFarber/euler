require "pry"

found = false

def count_digits(num)
	num.to_s.length
end

def calcNextFib(arr)
	arr[arr.length] = arr[-1] + arr[-2]
end

fibs = [0, 1, 1]

found = false

until found
	calcNextFib(fibs)
	found = true if count_digits(fibs.last) === 1000
end

puts fibs.length - 1
