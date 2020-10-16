
let rows = 8;
function diamond(rows){
    if(rows<2 || rows>10){
        console.log("Input range between 2-10");
    }
    else{
    let size = rows
    for(let i=0;i<rows;i++){
        for(let j=0;j<rows;j++){
            if(j == size-1){
                process.stdout.write("* ");
                size -= 1;
            }
            else if(j<size){
                process.stdout.write(" ");
            }
            else{
                process.stdout.write("* ");
            }
        }
        console.log();
    }
    size = 0;
    for(let i=rows;i>0;i--){
        for(let j=0;j<rows-i;j++){
            process.stdout.write(" ");
        }
        for(let j=rows;j>0;j--){ 
            if(j <= i){
                process.stdout.write("* ");
            }

        }   
        console.log();
    }
    }
} 

diamond(process.argv[2]);