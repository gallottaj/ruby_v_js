# Problem 1:
# Write a method that prints out every number from 1 to 100. 

# i = 0
# 100.times do
#   i = i + 1
#   p i
# end

# Problem 2: 
# Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).

# i = 1
# 50.times do
#   i +=2
#   p i
# end

# Problem 3:
# Write a method that accepts an array of numbers as a parameter, and counts how many 55's there are in the array.

# numbers = [1,3,4,55,55]
# i = 0
# count = 0

# numbers.length.times do
#   if numbers[i] == 55
#     count += 1
#   end
#   i += 1
# end

# p count

# Problem 4:
# Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string. 
# For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].

strings = ["a", "b", "c", "d", "e"]
index = 0
new_array = []

strings.each do |string|
  if index % 1 == 0
    new_array<<string
    new_array<<"awesomesauce"
  end
  index += 1
end 

p new_array





