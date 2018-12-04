function prime(){
    var num = 2;
    var temp =0;
    for(i=2;i<num/2;i++)
    {
    if(num%i==0)
    {
        temp=1;
        break; 
    }
    }   
    if(temp==0)
    {
        console.log(+num+" "+ "is a prime number");
        
    }
    else
    {
        console.log(+num+" "+  "is not a prime number");   
    } 
} 
prime();
