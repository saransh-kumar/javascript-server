// fibonacci

function fibonacci(range){
    let i = 1, t1 = 0, t2 = 1;
    while(i <= range){
        process.stdout.write(t1 + " ");
            let sum = t1 + t2;
            t1 = t2;
            t2 = sum;
            i++;
    }
    console.log();
} 
fibonacci(process.argv[2]);