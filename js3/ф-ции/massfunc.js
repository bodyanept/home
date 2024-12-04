// task1

let car={
    proizvoditel:'LADA',
    model:2170,
    year:2016,
    speed:'110',
}
// for(let tempProperty in car){
//     alert(tempProperty)
//     alert(car[tempProperty])
// }

function rasst(x) {
    let time=Math.trunc(x/car.speed)
    let breakT= time%4
    if(breakT==0){
        time++
    }
    console.log(time);
    
    
}

rasst(440)


// alert(rasst(350))

//task2


// let drob={
//     chis:3,
//     znam:4,
// }
// let drob2={
//     chis:1,
//     znam:2,
// }
// let result={
//     chis:0,
//     znam:0,
// }
// function obshZnam(drob,drob2){
//     let obsh=drob.znam;
//     drob.chis=drob.chis*drob2.znam;
//     drob.znam=drob.znam*drob2.znam;
//     drob2.chis=drob2.chis*obsh;
//     drob2.znam=drob2.znam*obsh;

// }
// function plus(drob,drob2){
//     if(drob.znam!=drob2.znam){
//         obshZnam(drob,drob2)
//     }
//     result.chis=drob.chis+drob2.chis;
//     result.znam=drob.znam;
//     result=red(result)

//     return result
// }
// function minus(drob,drob2) {
//     if(drob.znam!=drob2.znam){
//         obshZnam(drob,drob2)
//     }
//     result.chis=drob.chis-drob2.chis;
//     result.znam=drob.znam;
//     result=red(result)

//     return result
// }
// function multi(drob,drob2) {

//     result.chis=drob.chis*drob2.chis;
//     result.znam=drob.znam*drob2.znam;
//     result=red(result)

//     return result
// }
// function div(drob,drob2) {

//     result.chis=drob.chis*drob2.znam;
//     result.znam=drob.znam*drob2.chis;
//     result=red(result)
//     return result
// }

// function red(drob) {
//     let nod=1
//     result.chis=drob.chis;
//     result.znam=drob.znam;
//     for(let i=result.chis;i>1;i--){
//         if((result.chis%i==0)&&(result.znam%i==0)){
//             result.chis/=i;
//             result.znam/=i;
//             nod=i;
//         }
//     }
//     return result
// }

// console.log(plus(drob,drob2));
// console.log(minus(drob,drob2));
// console.log(multi(drob,drob2));
// console.log(div(drob,drob2));
// console.log(red(drob));

//task3

// let hms={
//     hr:1,
//     min:32,
//     sec:44,
// }

// function showTime() {
//     console.log( ( '0' + hms.hr).slice(-2) 
//         + ":"
//         + ('0' + hms.min).slice(-2)
//         + ":" 
//         + ('0' + hms.sec).slice(-2)
//         );
// }
// function vis(){
//     for(let tempProperty in hms){
//             // alert(tempProperty);
//             // alert(hms[tempProperty]);
//             console.log(tempProperty);
//             console.log(hms[tempProperty]);
//         }
// }
// function changeSec(a){
    
    
//     if (hms.sec+a>59){
//         let plusMin=Math.trunc(a/60);
        
    
//         if(plusMin==0){
//         changeMin(1);
//         a=(hms.sec +a)-60;
//         hms.sec=0;
//         }else{
//         changeMin(b+plusMin);
//         a=(hms.sec+a)-(plusMin*60);
//         hms.sec=0;
        
//     }
    
// }   
    
//     hms.sec+=a
//     return hms.sec
// }
// function changeMin(b){
//     if (hms.min + b > 59) {
//         let plusH = Math.floor(b / 60);
//         if (plusH == 0) {
//             changeHr(1);
//             b = (hms.min + b) - 60;
//             hms.min = 0;
//         }
//         else{
//             changeHr(plusH);
//             b = (hms.min + b) - (plusH * 60);
//             hms.min = 0;
//         }
//     }

//     hms.min += b;
//     return hms.min
// }
// function changeHr(c){
//     if (hms.hr + c > 23) {
//     let plusD = Math.floor(c / 24);
//         if (plusD == 0) {
//             c = (hms.hr + c) - 24;
//             hms.hr = 0;
//         }
//         else{
//             c = (hms.hr + c) - (plusD * 24);
//             hms.hr = 0;
//         }
//     }

//     hms.hr += c;
//     return hms.hr
// }
// function changeSeconds() {
//     let ss = 40                          // менять тут
//     changeSec(+ss);

//     showTime();
// }

// function changeMinutes() {
//     let mm =40                          // менять тут

//     changeMin(+mm);

//     showTime();
// }

// function changeHours() {
//     let hh = 2                          // менять тут

//     changeHr(+hh);

//     showTime();
// }

// changeSeconds()
// changeMinutes()
// changeHours()