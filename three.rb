require "pry"
largest = 1
targ = 600851475143 
i = 1


def is_prime?(int)

	half = int / 2
	while half > 2
		if int % half == 0
			return false
		end
		half -= 1
	end
	true

end

def divides_evenly?(dividend, divisor)
	
	if dividend % divisor == 0
		return true
	else
		return false
	end

end

while i < targ / 2
	if divides_evenly?(targ, i)
		largest = i
		binding.pry
	end
	i += 1
end

binding.pry

