start = Time.now.to_i

def qualifies?(num)
	i = 1
	while i < 21
		if num % i != 0
			return false
		end
		i += 1
	end
	return true
end

correct = false
it = 190

while !correct
	if qualifies?(it)
		correct = true
	else
		it += 190
	end
end

puts it

puts Time.now.to_i - start