//first method to find number of numberOfVowels

function numberOfVowels(str)
{

  let counter = 0;
  let checker = ["a","e","i","o","u"];
   str.split('').forEach(el=>
  {
    if(checker.includes(el)){counter++;}
  })
  return counter;
}
numberOfVowels("hello a i oaeouu")

//Second Method
function numberOfVowels2(str)
{

  let newArray = str.match(/[aeiou]/gi) //g will take care of all the occurences in the string and i will take care of lower and uppercase letters
  if(newArray !== null)
  {
    return newArray.length
  }
  else
  return "No vowels Found"

}
numberOfVowels2("hpyyyl")
