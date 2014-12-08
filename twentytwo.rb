require "pry"

score = {}
i = 1
"A".upto("Z") do |letter|
  score[letter] = i
  i += 1
end


list = File.read("names.txt").gsub("\"", "")
arr = list.split(",").sort


total = 0

arr.each_with_index do |name, ind|
  sum = 0
  name.split("").each_with_index do |letter|
    sum += score[letter]
  end
  total += sum * (ind + 1)
end
puts total