// prime

function prime(checkNumber){
    let flag = 0;
    for(let i=2;i<checkNumber/2;i++){
        if(checkNumber%i == 0){
            flag = 1;
            break;
        }
    }
    if(!flag){
        process.stdout.write("Prime numer");
    }
    else{
        process.stdout.write("Not a Prime number");
    }
    console.log();
}

prime(process.argv[2]);