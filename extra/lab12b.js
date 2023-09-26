let n = 4;
let flag = 0;
for(i=2;i<=n/2;i++)
{
    if(n%i==0)
    {
        flag = 1;
        break;
    }
}

if(n==0||n==1)
{
    console.log(n+" is Neither Prime nor composite");
}
else if(flag==0)
{
    console.log(n+" is Prime");
}
else{
    console.log(n+" is Composite");
}