require "prime"

def quadratic_prime?(a, b, n)
	Prime.prime?((n**2) + (a * n) + b)
end


highest = 0
prod = 0

-1000.upto(1000) do |a|
	-1000.upto(1000) do |b|
		streak = 0
		n = 0
		go = true
		while go
			if quadratic_prime?(a, b, n)
				streak += 1
				n += 1
			else
				if streak > highest
					highest = streak
					prod = a * b
				end
				go = false
			end
		end
	end
end


puts prod
puts highest


