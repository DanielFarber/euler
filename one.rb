total = 0

1.upto(999) do |int|
	if int % 3 == 0 || int % 5 == 0
		total += int
	end
end

puts total