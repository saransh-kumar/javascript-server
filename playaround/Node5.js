// Factorial

function Factorial(number){
    let i,fact=1;     
    for(i=1;i<=number;i++){    
        fact=fact*i;    
    }    
    process.stdout.write("Factorial of "+number+" is: "+fact);    
    console.log();
}

Factorial(process.argv[2]);