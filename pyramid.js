function pyramid(n)
{

let columns = (n*2)-1;
let mid = Math.floor(columns/2);
let newLine = ' ';
for(let row = 0;row<n;row++)
{
  for(let column = 0; column < columns; column++)
  {

    if(column >= mid-row && column <= row+mid)
    {
      newLine += '*';
    }
    else {
      newLine += ' ';
    }
  }
  console.log(newLine);
  newLine = ' '
}
}
