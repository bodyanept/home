// //task 1

// let a=Number(prompt ('1 число'))
// let b=Number (prompt('2 число'))
// let c= 0

// for(let i=a ;i<=b;i++){
//     c=c+i
// }
// console.log(c)

//task2



// let a= +prompt ('1 число')
// let b= +prompt('2 число')
// let c=1

// for(let i= 0;i<=a&& i<=b;i++){
//     if(a%i ==0 && b %i==0){
//         c=i
//     }
// }
// console.log(c);

//task3
// let a= +prompt('число')
// let div= ''
// for(let i= 1;i<=a;i++){
//     if(a%i ==0){
//         div += i +','
//     }
// }
// console.log(div);


//task 4
// let a= prompt('число')
// let i=0
// do{
//     i++
// }while(i<a.length)
//     console.log(i);
    

//task5
// let a =0
// let b =0
// let c =0
// let even=0
// let odd=0

// for(i=0;i<10;i++){
//     let value=+prompt('число','-1,0,1')
//     console.log(value);

//     if(value<0){
//         a++
//     }
//     else if(value==0){
//         b++
//     }
//     else{
//         c++
//     }

//     !(value%2)?(even++):(odd++);
// }
// console.log(`${a} отрицательных`);
// console.log(`${b} нулевых`);
// console.log(`${c} положительных`);
// console.log(`${even} четных`);
// console.log(`${odd} нечетных`);

//task6


    // let a=0
    // let b=''
    // let c=0
    // let res = true
    // do{
    //     a=+prompt('1число')
    //     b=prompt('знак')
    //     c=+prompt('2число')
    //     switch(b){
    //         case'+':
    //         console.log
    //         (
    //             `${a+c}`
    //         )
    //         break
    //         case'-':
    //         console.log(
    //             ` ${a-c}`
    //         )
    //         break
    //         case'/':
    //         console.log(
    //             ` ${a/c}`
    //         )
    //         break
    //         case'*':
    //         console.log(
    //             ` ${a*c}`
    //         )
    //         break
    //     }
    //     res = confirm('еще раз?')
    // }while(res==true)

//task7

// let a = prompt('число')
// let b =prompt('на сколько сдвинуть')
// let arr=a.split('')


// // debugger
// for(let i=0;i<b;i++){
//     delete arr[i]
// }
// let res=arr.join('')
// console.log(res);

//task8

// let arr=[
//     'Monday ','Tuesday ','Wednesday ','Thursday ','Friday ','Saturday ','Sunday '
// ]
// let i =0
// do{
//     alert(`${arr[i]}, следующий день?`)
//     i++
// }while(i<arr.length)

//task9

// let table = "";
// for (let i = 2; i <= 9; i++) {
//   for (let a = 1; a <= 10; a++) {
//     table += `${i} x ${a} = ` + i * a + ", ";
//   }
// }
// alert(table);

//task10


let n=0
do{
    let n=+prompt('загадай от 0 до 100')  
}while(n<0 || n>100)
let min=0
let mdl=0
let max=100
let back =''
while(min <=max){
    mdl=Math.trunc((min+max)/2)
    back=prompt(`${mdl}?,если да,пропиши =,если меньше то <,если больше то > `)

    if (back != '='&& back != '<'&& back !='>'){
        alert('что ты ввел,я не понимаю')
        continue;
    }
    if(
        (back != '='&& mdl ==n)||
        (back == '='&& mdl !=n)
    ){
        alert('по моему у нас завелся врунишка')
        continue
    }
    if(back=='>'){
        min=mdl+1
    }else if(back=='<'){
        max =mdl-1
    }else{
        min = max+1
    }
    
}    
alert(`ты загадал ${mdl}`)