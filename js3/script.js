//task1

// let a = Math.trunc(
//     +prompt("начало диапазона: ")
//   );
//   let a1 = a;
//   let b;
//   do {
//     b = Math.trunc(
//       +prompt("конец диапазона: ")
//     );
//   } while (a >= b);
//   let summa = 0;
//   while (a <= b) {
//     summa += a;
//     a++;
//   }
//   alert(`В диапазоне от ${a1} до ${b} включительно сумма всех чисел составляет: ${summa}.`);


// task2

// let numb1 = prompt('первое число')
// let numb2 = prompt('второе число')
// let max1 = Math.abs(numb1)
// let max2 = Math.abs(numb2)
// let maxDivisor = 1
// let i = 1
// while(
//     i<= max1 && i<=max2){
//         if(max1 % i == 0 && max2 % i == 0){
//             maxDivisor = i
//         }
//         i++
//     }
//     alert(`у твоих чисел ${numb1} и ${numb2} наибольший делитель будет ${maxDivisor}`)


//task3

let numb = +prompt('дай число')
let numbnew = Math.abs(numb)
let divisor = ""
let i = 1
do {
    if (numbnew % i == 0){
        divisor += i + ","
    }
    i++
}while(i <= numbnew)
    alert(`у числа ${numb} делители - ${divisor}`)



