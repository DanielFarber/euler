def divisors_in(num)

	root = Math.sqrt(num).to_i
	i = 1
	divs = 0
	while i < root
		if num % i === 0
			divs += 2
		end
		i += 1
	end
	if Math.sqrt(num) === root
		divs += 1
	end
	divs

end

found = false
i = 0
tri = 0
until found
	i += 1
	tri += i
	if divisors_in(tri) > 500
		found = true
	end
end

puts tri
