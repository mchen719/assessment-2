// What is the difference between a parameter and arguemnt? 
/// A parameter is a variable for a function and serves as a placeholder so it has not actual value. An argument actually has a value and is passed during the function invoation. 
// Within a function, what is the differnce bewteen return and console.log? 
/// Return actually gives back a value that can then be used elsewhere, a console.log is just posting information in the terminal. The console.log has no actual value that we can then use in our code. 

// Palindrome 
function isPalindrome(string) {
    const cleanStr = string.toLowercase()

    return cleanStr === cleanStr.split('').reverse().join('')
}