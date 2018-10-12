// First Method
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

// Second Method using recursion

function pyramid2(n,row=0,columns=n*2-1,newLine='')
{
  mid = Math.floor(columns/2);
  let column = 0;
  while(column < columns)
  {
    if(column >= mid-row && column <= mid+row)
    {
      newLine += "*";
    }
    else
    {
      newLine += ' ';
    }
    column++;
  }
console.log(newLine);
row++;
newLine='';
if(row<n){
pyramid2(n,row,columns,newLine);
}
}
