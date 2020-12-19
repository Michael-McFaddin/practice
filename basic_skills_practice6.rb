#1. Given an array of numbers, return a new array in which only select numbers
#    from the original array are included, based on the following details:
#    The new array should always start with the first number from the original array.
#    The next number that should be included depends on what the first number is.
#    The first number dictates how many spaces to the right the computer should move to
#    pick the next number. For example, if the first number is 2, then the next number
#    that the computer should select would be two spaces to the right. This number gets
#    added to the new array. If this next number happens to be a 4, then the next number
#    after that is the one four spaces to the right. And so on and so forth until the end
#    of the array is reached.
#    Input:[2, 1, 3, 2, 5, 1, 2, 6, 2, 7, 1, 5, 6, 3, 2, 6, 2, 1, 2]
#    Output:[2, 3, 1, 2, 2, 1, 5, 2, 2]

#2. Create a new array that is the reverse of this array [2, 1, 8, 4, 9, 5, 3]

#3. Given a string, return true if the “$” character is contained within the
#    string or false if it is not.
#    Input: “i hate $ but i love money i know i know im crazy”
#    Output: true
#    Input: “abcdefghijklmnopqrstuvwxyz”
#    Output: false

#4.  Given a string, return a copy of the original string that has every other
#     character capitalized. (Capitalization should begin with the second character.)
#     Input: “hello, how are your porcupines today?”
#     Output: “hElLo, HoW ArE YoUr pOrCuPiNeS ToDaY?”

#5.  Given a string, find the first occurence of two duplicate characters in a row,
#     and return the duplicated character.
#     Input: “abcdefghhijkkloooop”
#     Output: “h”

#6.  Given a string of words, return a new string that contains the words in reverse order.
#     Input: “popcorn is so cool isn’t it yeah i thought so”
#     Output: “so thought i yeah it isn’t cool so is popcorn”

#7.  Given a string, return true if it is a palindrome, and false if it is not.
#     (A palindrome is a word that reads the same both forward and backward.)
#     Input: “racecar”
#     Output: true
#     Input: “baloney”
#     Output: false

#8. Given two strings of equal length, return the number of characters that are different between the two strings.
#    Input: "ABCDEFG", "ABCXEOG"
#    Output: 2

#    Explanation: While the A, B, C, E, and G are in the same place for both strings,
#    they have different characters in the other spaces. Since there are 2 such spaces
#    that are different (the D and F in the first string), we return 2.
#    Input: "ABCDEFG", "ABCDEFG",
#    Output: 0

#9. Given tow arrays, combine both arrays with the numbers in order from lowest to highest
#    Input1: [1, 4, 7, 9]
#    Input2: [2, 3, 5, 8]
#    Output: [1, 2, 3, 4, 5, 7, 8, 9]
