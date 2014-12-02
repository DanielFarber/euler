output = 0

999.downto(100) do |first|
	999.downto(100) do |second|
		prod = first * second
		if prod.to_s === prod.to_s.reverse && prod > output
			output = prod
		end
	end
end

puts output