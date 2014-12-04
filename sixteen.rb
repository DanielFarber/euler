total = 2 ** 1000
arr = total.to_s.split("")
output = arr.inject(0) { |res, digit| res += digit.to_i }
puts output