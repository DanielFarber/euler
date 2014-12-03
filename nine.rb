solution = nil

1.upto(997) do |int_a|
	(int_a + 1).upto(997) do |int_b|
		int_c = Math.sqrt( (int_a ** 2) + (int_b ** 2) )
		if int_a + int_b + int_c === 1000
			solution = int_a * int_b * int_c
			break
		end
	end
end

puts solution
