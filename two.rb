total = 0
first = 1
second = first

first = first + second

while first < 4000000
	if first % 2 == 0
		total += first
	end

	shunt = first
	first = first + second
	second = shunt

end

puts total


