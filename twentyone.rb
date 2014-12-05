require "pry"

def calc_divisors(num)
	arr = [1]
	root = Math.sqrt(num).to_i
	2.upto(root) do |int|
		if num % int === 0
			arr.push(int, num / int)
		end
	end
	arr.sort
end

def sum_divisors(num)
	calc_divisors(num).inject { |res, el| res + el }
end


computed = {}
amicable = []

1.upto(10000) do |int|
	unless computed[int]
		comp = sum_divisors(int)
		computed[int] = true && computed[comp] = true
		if sum_divisors(comp) === int && comp != int
			amicable.push(int, comp)
		end
	end
end

puts amicable.inject { |res, el| res + el }

