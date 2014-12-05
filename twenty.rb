require "pry"
def factorialize(num)
	output = 1
	num.downto(1) do |int|
		output = output * int
	end
	output
end

str = factorialize(100).to_s

puts str.split("").inject(0) { |res, el| res + el.to_i }