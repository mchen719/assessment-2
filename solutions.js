// What is the difference between a parameter and arguemnt? 
/// A parameter is a variable for a function and serves as a placeholder so it has not actual value. An argument actually has a value and is passed during the function invoation. 
// Within a function, what is the differnce bewteen return and console.log? 
/// Return actually gives back a value that can then be used elsewhere, a console.log is just posting information in the terminal. The console.log has no actual value that we can then use in our code. 

// Palindrome 
function isPalindrome(string) {
    const cleanStr = string.toLowercase()

    return cleanStr === cleanStr.split('').reverse().join('')
}

// Sum Array 
function sumArr(arr) {
    const sum = 0 

    for (let i = 0; o < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

// Prime Number 
function isPrime(num) {
    if (num <= 1) {
        return false        
    }

    for (i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0){ 
            return false
        } 
    }
    return true
}

// Print Prime
function printPrime(num) {
    for (let i = 2; i <= num; i++) {
        if(isPrime(i)) {
            console.log(i)
        }
    }
}

// Calculate Cube
function calcCube(num) {
    return num * num
}

// Check Vowel
function isVowel(char) {
    const vowels = "aeiouAEIOU"

    const isVowel = vowels.includes(char)
  
    return isVowel
  }

  // Get Two Lengths 
  function getLength(str1, str2) {
    const lengths = []
    const strLen1 = str1.length
    const strLen2 = str2.length

    length.push(strLen1, strLen2)

    return lengths
  }

  // Get Multiple Lengths 
  function multLength(arr) {
    const lengths = arr.map(str => str.length)
    return lengths
  }

  // Maximum of 3 numbers 
  function maxNum(num1, num2, num3) {
    const max = Math.max(num1, num2, num3)
    return max
  }

  // Print Longest Word 
  function printLongest(arr) {
    const longestStr = arr.reduce((longest, current) => {
        return current.length > longest.length ? current : longest
    }, " ")
    return longestStr
  }

  // Transmogrify the Number 
  function transmogrify(num1, num2, num3) {
    const total = num1 + num2

    const result = Math.pow(total, num3)

    return result
  }

  // Project Euler Problem 2
  function evenFib(input) {
    let num1 = 1
    let num2 = 2
    let sum = 0

    while(num2 <= input) {
        if(num2 % 2 === 0) {
            sum += num2
        }
        const next = num1 + num2
        num1 = num2
        num2 = next
    }
    return sum
  }

  // Needle in the Haystack
  function findNeedle(arr){
    const needle = 'needle'
    const index = arr.indexOf(needle)
    
    return `The index of ${needle} is ${index}`
  }

// Sum the Positives 
function sumPositives(arr) {
    const positiveNums = arr.filter(num => num > 0)

    const sum = positiveNums.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

    return sum
}

/// Identifying Problem Solving Patterns 
// Question 1: Anagrams
// Psuedo-code 
/* 
1. Check to see if the lengths of the words match 
2. Create the counter objects 
3. Populate the objects with the frequency of each letter 
4. Compare the keys and frequencies 
5. Return the result (true/false)
*/

function anagram(first, second) {
    if (first.length !== second.length) {
        return false 
    }

    const counter = {}

    for(i = 0; i < first.length; i++) {
        let letter = first[i]

        counter[letter] = (counter[letter] || 0) + 1
    }

    for(i = 0; i < second.length; i++) {
        let letter = second[i]

        if(!counter[letter]){
            return false
        } else {
            counter[letter] -= 1
        }
    }
    return true 
}
/*
The solution above first checks to see if the length of the words are the same. 
If they are not, the function returns false. If it passes that test, the code then puts the first word in a counter using a loop. 
It then compares each letter of the second word to the counter, decreasing the freqency for each matching letter. 
If all letters match then it returns true. 
*/

//Question 2 (Same Freqency)
//Pseudo-code 
/*
1. Convert the numbers into a string 
2. Check to see if the length of the strings are the same, if not return false
3. Create a counter object and populate the freqency of the first number into the object 
4. Compare the second number to the first number and decrease the counter for each matching number 
5. Return true if the freqency of all numbers is 0 else return false 
*/
function sameFrequency(num1, num2) {
    let first = num1.toString()
    let second = num2.toString()

    if (first.length !== second.length) {
        return false 
    }

    const counter = {}

    for (i = 0; i < first.length; i++) {
        let int = first[i]

        counter[int] = (counter[int] || 0) + 1
    }

    for (i = 0; i < second.length; i++) {
        let int = second[i]

        if(!counter[int]) {
            return false 
        } else {
            counter[int] -= 1
        }
    }
    return true
}

/*
The code to this counter is basically the same as the first question. 
It decrease the frequency counter if there is a match and if the frequencyh of each integer is 0, it returns true. 
*/

// Question 3 (Are There Duplicates) 
// Psuedo-Code 
/*
1. Create a frequency counter and populate the counter by iterating over the array 
2. Iterate through the values of the counter 
3. If any value has a frequency greater than 1, return true 
*/
function checkDuplicate(arr) {
    const counter = {}

    for (i = 0; i < arr.length; i++) {
        let value = arr[i] 

        counter[value] = (counter[value] || 0) + 1

        if(counter[value] > 1) {
            return true
        }
    }
    return false
}

// Question 4 (MinSubArrayLen)
//Psuedo-Code 
/*
1. Create 2 pointer variables set to the begining value of the array, create a variable to track the sum and create a value to track the length
2. Set the value of sum equal to the first value of array
3. Using a loop, compare each value of the array to the input number and if any number is greater than the input return 1 
4. If not a single value is equal or greater, the second pointer with expand, the variable that tracks length with increase by 1 and the loop will run agian 
5. If the sum of all values in the array is less than the inputed number, return null 
*/
// My solution 
function minSubArrayLength(arr, num) {
    let start = 0
    let end = 0 
    let length = 0
    let sum = 0

    while(end < arr.length) {
        sum += arr[end]

        for (i = end; i < arr.length; i++) {
            sum += arr[end]
        }
    }
}

// Found Solution
function minSubarrayLength(target, nums) {
    let start = 0
    let end = 0
    let minLen = Infinity
    let sum = 0
  
    while (end < nums.length) {
      // Expand the window by moving the end pointer
      sum += nums[end]
  
      // Check if the sum is greater than or equal to the target
      while (sum >= target) {
        // Try to shrink the window from the beginning
        minLen = Math.min(minLen, end - start + 1)
  
        // Subtract values from the sum and move the start pointer forward
        sum -= nums[start]
        start++
      }
  
      // Move the end pointer forward
      end++
    }
  
    // Return the minimum length if found; otherwise, return 0
    return minLen !== Infinity ? minLen : 0
  }

// Question 5 (FindLongestSubstring)
  // Pseudo-Code 
  /*
  1. Create a variable for the value of the longest substring, start and an object for the map
  2. Use a map to store the characters and their positions 
  3. Iterate through the string 
  4. If the value pair is repeated move the start forward one 
  5. Update the index of the current character 
  6. Calculate the length and return the longest length variable 
  */
function FindLongestSubstring(str) {
    let start = 0
    let end = 0 
    let longest = 0
    const counterMap = {}
    
    for (end = 0; end < str.length; end++) {
        const current = str[end]

        if(counterMap[current] >= start) {
            start = counterMap[current] + 1
        }

    }
}

// Solution 
function findLongestSubstring(str) {
    let longestLength = 0
    let start = 0
    const charIndexMap = {}
  
    for (let end = 0; end < str.length; end++) {
      const currentChar = str[end]
  
      if (charIndexMap[currentChar] >= start) {
        // If the current character is already in the substring, move the start pointer
        start = charIndexMap[currentChar] + 1
      }
  
      // Update the index of the current character in the map
      charIndexMap[currentChar] = end
  
      // Calculate the length of the current substring
      const currentLength = end - start + 1
  
      // Update the longest length if necessary
      longestLength = Math.max(longestLength, currentLength)
    }
  
    return longestLength
  }

// Question 6 (Count Unique Values) 
// Pseudo-Code 
/*
1. Create the pointer variables
2. If the array is empty, return 0 
3. Use a loop to iterate and compare the values of the first 2 elements of the array
4. If they do not equal each other move the pointers forward 1 by setting the first pointer to the 2nd pointer and the 2nd pointer to the new element in the array 
*/
function countUniqueValues(arr) {
    let i = 0

    if(arr.length === 0) {
        return 0 
    }

    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++
            arr[i] = arr[j]
        }
    }
    return i + 1
}

// Question 7 (Average Pair) 
//Pseudo-Code 
/*
1. Create pointer variables 
2. If the array is empty return false 
3. Use a loop and set one pointer to the first element of the array and the 2nd pointer to the end of the array
4. If the average of the 2 numbers is too small move the first pointer forward one and redo the calculation 
5. If the average is too large, move the 2nd pointer back one spot to try and lower the average 
6. If there the target is achieved, return true else return false 
*/
function averagePair(arr, target) {
    if (arr.length === 0) {
        return false 
    }

    let start = 0
    let end = arr.length - 1

    while(start < end) {
        const currentAverage = (arr[start] + arr[end]) / 2

        if (currentAverage === target) {
            return true
        } else if (currentAverage < target) {
            start++
        } else {
            end --
        }
    }
    return false
}

//Question 8 (Find First and Last Position of Element in Sorted Array)
// Pseudo-Code 
/*
1. Within the function you will need 2 smaller functions, one for the first position and one for the last position 
2. For each function, initialize your variables for the start and end positons 
3. Within the first function, split the array in half and use a loop to iterate through the front half of the array to find the first position of the value given 
4. The second function will split the array in half again but only loop through the back half of the array to find the target value 
5. each sub-function will return either the start and end values respectively 
*/

function findFirstAndLastPosition(arr, target) {
    function findFirst(target) {
        let start = 0 
        let end = arr.length - 1
        let firstPosition = -1

        while(start <= end) {
            const mid = Math.floor((start + end) / 2)

            if(arr[mid] >= target) {
                end = mid - 1
                firstPosition = end 
            } else {
                start = mid + 1 
            }
        }
        return firstPosition
    }

    function findLast(target) { 
        let start = 0 
        let end = arr.length - 1
        let lastPosition = -1

        while (start <= end) {
            const mid = Math.floor((start + end) / 2)

            if(arr[mid] <= target) {
                start = mid + 1
                lastPosition = mid
            } else {
                end = mid - 1
            }
        }
        return lastPosition
    }
    
    const start = findStart(target)
    const end = findLast(target) 

    return [start, end]
}

//Question 9 (Pow(x,n))
// Pseudo-Code 
/*
1. If n is 0, return 1 
2. If n is a negative, calculate the power and return the recipritcol 
3. Use a loop to constantly calcualte the answer 
*/
function pow(base, num) {
    if (num === 0) {
        return 1
    }

    if (num < 0) {
        x = 1 / x
        num = -num
    }

    const counter = 0
    const answer = base 

    while(counter < num) {
        answer = answer * base
        counter++
    }
    return answer
}
// Found solution 
function myPow(x, n) {
    // Handle Base Case: If n is 0, return 1
    if (n === 0) {
      return 1;
    }
  
    // Handle Negative Power: If n is negative, convert the problem into calculating pow(x, -n) and take the reciprocal at the end
    if (n < 0) {
      x = 1 / x;
      n = -n;
    }
  
    // Divide and Conquer
    const subResult = myPow(x, Math.floor(n / 2));
  
    // Combine Results
    if (n % 2 === 0) {
      // For even n, x^n = (x^(n/2))^2
      return subResult * subResult;
    } else {
      // For odd n, x^n = x * (x^(n/2))^2
      return x * subResult * subResult;
    }
  }

  // Question 9 (Merge Sort)
  function mergeSort(arr) {
    if (arr.length < 2) {
      return arr
    }
  
    const mid = Math.floor(arr.length / 2)
    const left = arr.slice(0, mid)
    const right = arr.slice(mid)
  
    const sortedLeft = mergeSort(left)
    const sortedRight = mergeSort(right)
  
    return merge(sortedLeft, sortedRight)
  }
  
  
  // HELPER FUNCTION: merge two sorted arrays
  function merge(arr1, arr2) {
    const result = [];
  
    while (arr1.length && arr2.length) {
      if (arr1[0] <= arr2[0]) {
        result.push(arr1.shift());
      } else {
        result.push(arr2.shift());
      }
    }
  
    return result.concat(arr1, arr2);
  }
  
//Question 10 (Quick Sort)
  function quickSort(arr) {
    if (arr.length < 2) {
      return arr
    }
  
    const pivot = arr[arr.length - 1]
    const leftPartition = []
    const rightPartition = []
  
    for (i = 0; i < arr.length; i++) {
      if (arr[i] < pivot) {
        leftPartition.push(arr[i])
      } else if (arr[i] > pivot) {
        rightPartition.push(arr[i])
      }
    }
    const sortedLeft = quickSort(leftPartition)
    const sortedRight = quickSort(rightPartition)
  
    return sortedLeft.concat(pivot, sortedRight)
  }
  
