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
