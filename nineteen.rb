require "pry"
twentieth_century = []
week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

1.upto(100) do |year|
  months.each do |month|
    if month === 28 && (year > 3 && year % 4 === 0)
      1.upto(29) { |day| twentieth_century << day }
    else
      1.upto(month) { |day| twentieth_century << day }
    end
  end
end

sundays = 0

twentieth_century.each_with_index do |day, ind|
  sunday = ind % 7 === 0
  first = day === 1
  sundays += 1 if first && sunday
end

puts sundays
