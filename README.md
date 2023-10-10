# General exercises
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)


1. Write a function named `triplet` that takes in one parameter and logs that parameter 3 times into the console. For the input "Cat" it would log "CatCatCat"

2. Write a function named `quintuplet` that takes in one parameter and returns that parameter repeated five times. For the input "Cat" it would return "CatCatCatCatCat"

3. Write a function named `multiStr` that takes in two parameters, the first one should be a number and the 2nd one should be a string. The function returns the 2nd argument repeated as many times as the 1st argument defines. For the inputs `3` and `Woah` it should return `WoahWoahWoah`

4. Write a function named `largestNumInArray` that takes in an array of numbers as a parameter. It should return the largest number in the array. For the input `[1,6,83,91,0,-4,1337,5]` it should return `1337`

5. This question has 2 parts

    Part a) write a function named `printIfDivisibleByTen` that takes in a number and prints a `"Even 10!"` to the console if the number is evenly divisible by 10. Examples:

    -  printIfDivisibleByTen(1) --> no output
    -  printIfDivisibleByTen(2) --> no output
    -  printIfDivisibleByTen(32) --> no output
    -  printIfDivisibleByTen(10) --> "Even 10!" into the console
    -  printIfDivisibleByTen(30) --> "Even 10!" into the console
    -  printIfDivisibleByTen(90000) --> "Even 10!" into the console

    Part b) write a for-loop that runs 125 times, each time calling the function you created in part a with the current iteration number.

6. Write an arrow function named `largestNum` that takes in 5 numbers as its parameters and returns the largest one

7. Write an arrow function named `isString` that takes in one parameter and returns true if that parameter is a string.

8. Write an arrow function named `areStrings` that takes in two parameters and returns true if both of them are strings.

9. Write an arrow function named `getFirstWord` that takes in one string as parameter. The function should return the first word in the string. Examples:
    - getFirstWord("Internetting is hard") --> "Internetting"
    - getFirstWord("Hello World") --> "Hello"
    - getFirstWord("Hello") --> "Hello"

10. *HARD* Write an arrow function named `wordRepeater` that takes in one string as parameter.
The function should return a new string where each word in the input string is repeated by the number of words in the input string. Examples:
    - wordRepeater("bunny") --> "bunny"
    - wordRepeater("Cat food") --> "Cat Cat food food"
    - wordRepeater("I am groot") --> "I I I am am am groot groot groot"
    - wordRepeater("O M G ?") --> "O O O O M M M M G G G G ? ? ? ?"

11. Write a short (single line) arrow function named `firstLetter` that takes in one string and returns the first character of that string. Examples:
    - firstLetter("cat") --> "c"
    - firstLetter("quylthulg") --> "q"

12. Write an arrow function named `firstLetters` that takes in one string and returns a new string. The new string needs to be made from the first letter of each of the words in the input. Examples:
    - firstLetters("cat") --> "c"
    - firstLetters("What the fruit") --> "Wtf"
    - firstLetters("MongoDB Express Node React") --> "MERN"
    - firstLetters("What You See Is What You Get") --> "WYSIWYG"

13. Write an arrow function named `len` that takes in one value. If that value is a string, it will return the length of the string. If that value is an array, it returns the length of the array. If it is something else, it will return null. You might need to search Google to find out how to identify if the argument is an array - but there are other ways to solve this too!

14. Write an arrow function named `explode` that takes in one value. If the value is not a string, return null. If it is a string, return an array where each of the characters of that string is an individual array item. Examples:
    - explode("Cat") --> ["C", "a", "t"]
    - explode(41) --> null
    - explode("") --> []
    - explode("R & D") --> ["R", " ", "&", " ", "D"]

15. Reverse engineering challenge 1. Write a function that does this (*BONUS*: write it as a short (one line) arrow function):
    - foo("") -> false
    - foo("a") -> false
    - foo("o") -> true
    - foo("Cat") -> false
    - foo("Tomato") -> true
    - foo("Potato") -> true
    - foo("Blanket") -> false
    - foo("1") -> false

16. Reverse engineering challenge 2. Write a function that does this (*BONUS*: write it as a short (one line) arrow function):
    - bar("") --> "Cat"
    - bar("x") --> "Cat"
    - bar("Cat") --> "Catt"
    - bar("Foobar") --> "Catobar"
    - bar("Potato") --> "Cattato"
    - bar("Tomato") --> "Catmato"
    - bar("International Space Station") --> "Catternational Space Station"

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### 1. triplet

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | `triplet` function exists |
| ![Status](../../blob/badges/.github/badges/main/status1.svg) | function takes a parameter and logs it 3 times to console |

### 2. quintuplet

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status2.svg) | `quintuplet` function exists |
| ![Status](../../blob/badges/.github/badges/main/status3.svg) | function returns argument value repeated 5 times |

### 3. multiStr

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status4.svg) | `multiStr` function exists |
| ![Status](../../blob/badges/.github/badges/main/status5.svg) | function returns second argument repeated as many times as defined by first argument  |

### 4. largestNumInArray

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status6.svg) | `largestNumInArray` function exists |
| ![Status](../../blob/badges/.github/badges/main/status7.svg) | function returns largest number from provided array |

### 5. printIfDivisibleByTen

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status8.svg) | `printIfDivisibleByTen` function exists |
| ![Status](../../blob/badges/.github/badges/main/status9.svg) | function takes a number as argument and prints 'Even 10!' if passed number is evenly divisible by 10 |
| ![Status](../../blob/badges/.github/badges/main/status10.svg) | Function is called 125 times in a loop |

### 6. largestNum

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status11.svg) | `largestNum` function exists |
| ![Status](../../blob/badges/.github/badges/main/status12.svg) | function takes 5 numbers as arguments and returns largest one |

### 7. isString

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status13.svg) | `isString` function exists |
| ![Status](../../blob/badges/.github/badges/main/status14.svg) | function returns `true` if passed a string |
| ![Status](../../blob/badges/.github/badges/main/status15.svg) | function doesn't return `true` if passed anything other than a string |

### 8. areStrings

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status16.svg) | `areStrings` function exists |
| ![Status](../../blob/badges/.github/badges/main/status17.svg) | function returns `true` if both passed arguments are strings |
| ![Status](../../blob/badges/.github/badges/main/status18.svg) | function doesn't return `true` if at least one passed argument is not a string |

### 9. getFirstWord

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status19.svg) | `getFirstWord` function exists |
| ![Status](../../blob/badges/.github/badges/main/status20.svg) | function returns first word of passed string |

### 10. wordRepeater

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status21.svg) | `wordRepeater` function exists |
| ![Status](../../blob/badges/.github/badges/main/status22.svg) | function returns string with words from original string repeated as many times as number of words in original string |

### 11. firstLetter

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status23.svg) | `firstLetter` function exists |
| ![Status](../../blob/badges/.github/badges/main/status24.svg) | function returns first character of passed string |

### 12. firstLetters

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status25.svg) | `firstLetters` function exists |
| ![Status](../../blob/badges/.github/badges/main/status26.svg) | function returns string made up of first letter of each word in passed string |

### 13. len

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status27.svg) | `len` function exists |
| ![Status](../../blob/badges/.github/badges/main/status28.svg) | function returns length if passed a string or an array |
| ![Status](../../blob/badges/.github/badges/main/status29.svg) | function returns `null` if passed anyting other than string or array |

### 14. explode

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status30.svg) | `explode` function exists |
| ![Status](../../blob/badges/.github/badges/main/status31.svg) | function returns characters of passed string as array |
| ![Status](../../blob/badges/.github/badges/main/status32.svg) | `function returns `null` is passed anything other than a string |

### 15. reverse engineering 1

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status33.svg) | `foo` function exists |
| ![Status](../../blob/badges/.github/badges/main/status34.svg) | function returns `false` if passed the string 'hi world' |
| ![Status](../../blob/badges/.github/badges/main/status35.svg) | function returns `true` if passed the string 'hi worldo' |

### 16. reverse engineering 2

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status36.svg) | `bar` function exists |
| ![Status](../../blob/badges/.github/badges/main/status37.svg) | function returns 'Cat world' if passed the string 'hi world' |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=PB-Functions-General-Exercises)


[//]: # (autograding info end)