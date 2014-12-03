require "prime"
total = 0

Prime.each do |int|
	if int < 2000000
		total += int
	else
		break
	end
end

puts total