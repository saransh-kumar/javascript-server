// Odd number

function Event(range){
    for(let i=1;i<=range;i+=2){
        process.stdout.write(i+" ");
    }
    console.log();
}

Event(process.argv[2]);