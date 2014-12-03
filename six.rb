summed_squares, sum = 0, 0

i = 0
while i < 101
	summed_squares += i ** 2
	sum += i
	i += 1
end

squared_sum = sum ** 2

puts (squared_sum - summed_squares).abs
