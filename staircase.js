//first method using loops
function staircase(n)
{

   for(let i=1;i<=n;i++)
{    newLine = '';
    for(let j=1;j<=n;j++)
  {
          if(i<j)
          {
               newLine +=  ' ';
          }
          else
          {
               newLine += '#';
          }
  }
          console.log(newLine);
 }
}

//Second method using recursion

function staircase2(n,row=0,stair='')
{
  if(row === n)  { return;  }

    if(n === stair.length)
    {
      console.log(stair);
      return staircase2(n, row+=1);
    }
  // if(stair.length <= row)
  //   {
  //         stair += '#'
  //   }
  // else {
  //     stair += ' '
  //   }
//turnary operator for the above expression
  stair.length <= row ? stair +='#' : stair+= ' '
}
    staircase2(n, row, stair);

}
