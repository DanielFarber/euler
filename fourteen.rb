require "pry"
resolved_collatzes = {}

def sequence_length_of(num, hash)

	return hash[num] if hash[num]

	result = num
	steps = 1

	loop do
		result = calc_collatz_step(result)
		steps += 1
		if result === 1
			hash[num] = steps
			return steps
		elsif hash[result]
			steps += hash[result] - 1
			hash[num] = steps
			return steps
		end
	end
end



def calc_collatz_step(num)
	if num % 2 === 0
		return num / 2
	else
		return (num * 3) + 1
	end
end

highest = 0
i = 1
ans = 0

while i < 1000000
	res = sequence_length_of(i, resolved_collatzes)
	if res > highest
		ans = i
		highest = res
	end
	i += 1
end

puts ans