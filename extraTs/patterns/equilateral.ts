
// export default function equilateral(rows){
//     if(rows<2 || rows>10){
//         console.log("Input range between 2-10");
//     }
//     else{
//         let size = rows
//         for(let i=0;i<rows;i++){
//             for(let j=0;j<rows;j++){
//                 if(j == size-1){
//                     process.stdout.write("* ");
//                     size -= 1;
//                 }
//                 else if(j<size){
//                     process.stdout.write(" ");
//                 }
//                 else{
//                     process.stdout.write("* ");
//                 }
//             }
//             console.log();
//         }
//     }
// }
export default function equilateral(rows: number): void {
    let j = rows;
    for (let i = 1; i <= rows; i++) {
    let s = ' '.repeat(j);
    console.log(s, '* '.repeat(i));
    s = '';
    j--;
    }
}
