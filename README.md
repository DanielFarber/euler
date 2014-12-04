# Euler

Leonhard Euler was a noteworthy mathematician and physicist.  I guess some helpful individuals have decided to memorialize him by posting a series of code challenges at [projecteuler.net].  Here are my solutions to some of those challenges.

##Notes

###Problem 1


###Problem 2
###Problem 3
###Problem 4
###Problem 5
I wrote the js version first but in Ruby, it was unbearably slow.  So, I concluded logically that the iterator could run in factors of 190 which made it instantaneous.
###Problem 6
###Problem 7
Learned a little about the Ruby Prime class, which did all of the work in my Ruby example.
###Problem 8
###Problem 9
###Problem 10
###Problem 11
The JavaScript version could be DRYer.
###Problem 12
The square root is a powerful component of a lot of these processes.  The code is basically the same but the Ruby version is slower.
###Problem 13
I had no trouble getting the solution by simply adding the integers together, both in JS and Ruby.
###Problem 14
In the JS version, I simply run the Collatz sequence for every integer under 1,000,00.  I tried something a little different in Ruby, though: I save each result in a hash and if, in the course of the sequence, a number that's already in the hash is encountered, it just adds that total to the result.  I don't think this is any more efficient, though.


[projecteuler.net]:http://www.projecteuler.net