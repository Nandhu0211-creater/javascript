// while print 1 to 10
let i=1
while(i<=10)
{
    console.log(i)
    i++
}
console.log("............................")

// print even 1 to 10 (2, 4, 6,8,10)
let a=2
while(a<=10)
{
    console.log(a)
    a+=2
}
console.log("............................")

//do while.. print 1 to 10
console.log("do while loop")
let b=1
do
{
    console.log(b)
    b++
}
while(b<=10)
console.log("............................")

//for loop... print 1 to 10
console.log("for loop")
let c=1
for(c=1;c<=10;c++)
{
    console.log(c)
}
console.log("............................")

//jumping statement -- break and continue
for (let d=1;d<=10;d++)
{
    if(d==5)
    {
      break
    }
    console.log(d)
}
console.log("............................")

//continue statement
for (let e=1;e<=10;e++)
{
    if(e==5)
    {
      continue
    }
    console.log(e)
}
console.log("............................")