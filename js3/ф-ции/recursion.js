//task1

// function step(a,b) {    
//     if(b===0){
//         return 1
//     }else{
//         const res = a*step(a,b-1)
//         return res

//     }
// }
//var2
    // let step =(a,b)=>  (b===1) ?  a: (a*step(a,b-1))
  

// console.log(step(6,5));

//task2

// function delitel(a,b){
//     if(b===0){
//         return a
//     }else{
//        return delitel(b,a%b)
//     }
// }
//var2
// let delitel=(a,b)=>(b===0)? a:(b,a%b);
// console.log(delitel(125,100));

//task3
// function max(a, b = 0) {
//   if (a < 10) return a > b ? a : b;
//   let num = a % 10;
//   if (num > b) b = num
//   return max(Math.floor(a / 10), b);
// }

// console.log(max(6546684521));

//task4

// function prost(a) {
//   if (a <= 1) return false;
//   for (let i = 2; i <= Math.sqrt(a); i++) {
//   if (a % i === 0) return false;
// }
//   return true;
// }
// console.log(prost(5));

//task5

// function func(num) {
// function mnojitel(a, b, c) {
//     if (b > a ** 0.5) {
//     c.push(a);
//     return c;
//     } else if (a % b == 0) {
//     c.push(b);
//     mnojitel(a / b, b, c)
//     } else {
//      mnojitel(a, b + 1, c)
//     }
//     return c.join("*")
// }
// let y = 2
// let z = []
  
// console.log((mnojitel(num, y, z)))
    
// }
// func(18);
  
//task6


    function Fibonacci(a) {
      if (a == 1 || a == 2) {
        return 1;
      }
      return Fibonacci(a - 1) + Fibonacci(a - 2);
    }
console.log(Fibonacci(13));

