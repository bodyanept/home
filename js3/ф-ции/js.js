//task1

// let a=0
// function zeroOne(x,z) {
//     if(z<x){
//         a=1
//     }
//     else if(x<z){
//         a=-1
//     }
//     return a
// }
// console.log(zeroOne(6,1));

//task2
// let a=1
// function factor(x) {

//     for(i=1;i<=x;i++){
//         a=a*i
//     }
//     return a
    
    
// }
// console.log(factor(1));

//2 task 2 var рекурсия

// function factor(x){
//     return x ? x* factor(x-1) :1
// }
// console.log(factor(5));

// let factor = (x) => x ? x* factor(x-1) :1

// console.log(factor(5));

//task3
// let a =''
// function threeOne(b,c,d) {
//     a= a+b+c+d
//     return a
// }
// console.log(threeOne(6,2,3));

//task 4

// function per(a,b){
//     let s= 0
//     if(a>=1 && b>=1){
//         s=a*b
//     }else{
//         s=a*a
//     }
//     return s
// }
// console.log(per(6,8));

//task5

// function perfectNum(a) {
//     let b=0
//     for(let i =1;i<=a/2;i++){
//         if(a%i==0){
//             b+=i
//         }
//     }
//     return b==a
// }
//     let number = 27                                  //вводи число сюда
//     if(perfectNum(number)){
//         console.log(`${number} -совершенное число`);
//     }else{
//         console.log(`${number} -не совершенное число`);
//     }



//task 6

// function perfectNum(a) {
//     let b=0
//     for(let i =1;i<=a/2;i++){
//         if(a%i==0){
//             b+=i
//         }
//     }
//     return b==a
// }

// function diap(min,max){
//     for(let i =min;i<=max;i++){
//         let perf=perfectNum(i)
//         if (perf)console.log(i);
//     }
    
// }


// console.log(diap(1,10000));


//task7

// function time(hr,min,sec) {
//     let t =``
//         if(min==undefined && min==undefined){
       
//         t=`${hr}:00:00`
//         return t
//     }
//     else if(sec==undefined){
      
//         t=`${hr}:${min}:00`
//         return t

//     }else if (sec==undefined ){
//         t=`${hr}:00:${sec}`
//         return t
//     }else{
//         t =`${hr}:${min}:${sec}`
//         return t
//     }
 
    
    
// }

// console.log(time(10,));


//task8

// function timeInSec(hr,min,sec) {
//     let hsec=hr*3600
//     let msec=min*60
//     let sum=hsec+msec+sec
//     return sum
// }
// console.log(timeInSec(10,12,35));

//task9

// function SecInTime(sec) {
//     let hr=Math.trunc(sec/3600)
//     let ost = Math.trunc(sec - (hr*3600))
//     let min =Math.trunc(ost/60)
//     let s= ost -(min*60)
//     let t =`${hr}:${min}:${s}`
//     return t
   
// }
// console.log(SecInTime(83540));

//task10

function diff(fh,fm,fs,lh,lm,ls) {
    let fhsec=fh*3600
    let fmsec=fm*60
    let fsum=fhsec+fmsec+fs

    let lhsec = lh*3600
    let lmsec = lm*60
    let lsum= lhsec+lmsec+ls

    let different= Math.abs(lsum - fsum)

    let dhr=Math.trunc(different/3600)
    let ost = Math.trunc(different - (dhr*3600))
    let dmin =Math.trunc(ost/60)
    let s= ost -(dmin*60)
    let t =`${dhr}:${dmin}:${s}`
    return t

}

console.log(diff(23,33,12,9,40,10));
