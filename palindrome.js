//first method using built in functions and making it case insensitive
function isPalindrome(str)
{
  str = str.toLowerCase(); 
 return str.split('').reverse().join('') === str
}
