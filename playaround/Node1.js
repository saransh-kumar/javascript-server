// Even number

function Event(range){
    for(let i=2;i<=range;i+=2){
        process.stdout.write(i+" ");
    }
    console.log();
}

Event(process.argv[2]);