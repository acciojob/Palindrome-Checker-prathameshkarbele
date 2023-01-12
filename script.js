// complete the given function

function palindrome(str){
 str = str.toLowerCase();
    // reverse the string
    let reversed = str.split('').reverse().join('');
    // check if the reversed string is equal to the original string
    return str === reversed;
}
module.exports = palindrome
