// Odd number

function event(range){
    for(let i=1;i<=range;i+=2){
        process.stdout.write(i+" ");
    }
    console.log();
}

event(process.argv[2]);