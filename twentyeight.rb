require "pry"
filler = []
see = []
reps = 1001
half = reps / 2

reps.times {filler << 0}
reps.times { see << filler.clone }

see[half][half] = 1

x = half
y = half
i = 1
seg = 1

until see[0][0] != 0
	seg.times do
		i += 1
		x += 1
		see[y][x] = i
	end

	seg.times do
		i += 1
		y += 1
		see[y][x] = i
	end
	seg += 1

	seg.times do
		i += 1
		x -= 1
		see[y][x] = i
	end

	seg.times do
		i += 1
		y -= 1
		see[y][x] = i
	end
	seg += 1

end

(seg - 1).times do
	i += 1
	x += 1
	see[y][x] = i
end

sum = 0

0.upto(reps - 1) do |i|
	sum += see[i][i]
end

x, y = 0, reps - 1
reps.times do
	sum += see[y][x]
	x += 1
	y -= 1
end

puts sum - 1

# see.each { |x| print x.to_s + "\n" }

