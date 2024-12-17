//task1

// const button = document.getElementById('btn')
// let num=document.getElementById('num')

// button.addEventListener('click', ()=>{
//     num.textContent = Math.floor(Math.random()*100)

// })

//task2
// let corX=document.getElementById('x')
// let corY=document.getElementById('y')
// let task2=document.getElementById('task2')

// document.getElementById('task2').onmousedown= FuncOnClick;

// window.task2.addEventListener('mousemove',(event)=>{
//     x.textContent=`X=${event.x},`;
// })
// window.task2.addEventListener('mousemove',(event)=>{
//     y.textContent=`X=${event.y}`;
// })

// function FuncOnClick(event) {
//   switch (event.which) {
//     case 1:
//         click.textContent=`левый клик`;
//       break;
//     case 3:
//         click.textContent=`правый клик`;
//       break;
//   }
// }


//task3
//var1
// let text=document.getElementById('hideText')

// function shHide(){
//     if(text.style.display!=='block'){
//         text.style.display='block'
//     }else{
//         text.style.display='none'
//     }
// }

//var2

// const button = document.getElementById('hideBtn')
// let text=document.getElementById('hideText')


// button.addEventListener('click', ()=>{
//     if(text.style.display!=='block'){
//         text.style.display='block'
//     }else{  text.style.display = "none";
//     }

// })


//task4

// let bHtml=document.getElementById('html')
// let bCss=document.getElementById('css')
// let bJs=document.getElementById('js')
// let inner=document.getElementById('text')

// bHtml.addEventListener('click',()=>{
//         inner.textContent='HTML (от англ. HyperText Markup Language — «язык гипертекстовой разметки») — стандартизированный язык гипертекстовой разметки документов для просмотра веб-страниц в браузере. Веб-браузеры получают HTML документ от сервера по протоколам HTTP/HTTPS или открывают с локального диска, далее интерпретируют код в интерфейс, который будет отображаться на экране монитора.'
// })

// bCss.addEventListener('click',()=>{
//         inner.textContent='CSS (Cascading Style Sheets) — это каскадные таблицы стилей, язык описания внешнего вида HTML-документа. Он используется для определения стилей (правил) оформления документов, включая дизайн, вёрстку и вариации макета для различных устройств и размеров экрана'
// })

// bJs.addEventListener('click',()=>{      
//         inner.textContent='JavaScript (англ. /ˈdʒɑːvəskrɪpt/; аббр. JS) — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript (стандарт ECMA-262[2]).JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений. Наиболее широкое применение находит в браузерах как язык сценариев для придания интерактивности веб-страницам[8].'
  
// })


//task5

// const Fbtn=document.getElementById('del1')
// const Sbtn=document.getElementById('del2')
// const Tbtn=document.getElementById('del3')

// const fText=document.getElementById('content1')
// const sText=document.getElementById('content2')
// const tText=document.getElementById('content3')

// Fbtn.addEventListener('click',()=>{
//     fText.textContent=''
// })
// Sbtn.addEventListener('click',()=>{
//     sText.textContent=''
// })
// Tbtn.addEventListener('click',()=>{
//     tText.textContent=''
// })

//task6

// let add=document.getElementById('add')
// let bar=document.getElementById('bar')
// let shir=document.getElementById('progress')
// let start=0
// let delta=5

// add.addEventListener('click',oneClick)
// add.addEventListener('click',()=>{
//     plus();
//     shir.style.width=start+'%'

// })

// function oneClick(){
//     plus();
//     shir.style.width=start+'%'
// }

    // const plus=()=>{if(start<100){start+=delta}}

//task7





// window.onload=function(){
//     let tfrow = document.getElementById('tbl').rows.length;
//     let tbRow=[];
//     for (let i=1;i<tfrow;i++) {
//         tbRow[i]=document.getElementById('tbl').rows[i];
//         let tfcell=tbRow[i].cells.length;
//         for(let j=0;j<tfcell;j++){
//             let _tbCell=tbRow[i].cells[j];
//             _tbCell.onmouseover=function(){
//                 this.style.backgroundColor = 'rgb(228, 132, 100)';
//             }
//             _tbCell.onmouseout=function(){
//                 this.style.backgroundColor = 'rgb(244, 230, 211)';
//             }
//         }
//     }
// };

//task8
// document.onmousedown = document.onselectstart = function() {
// return false;
// };

// no.addEventListener('contextmenu', event => event.preventDefault());

//task9
// let num=1
// like.addEventListener('click',()=>{
//     plus()
//     like.textContent=`Like ${num}`
// })

// const plus=()=>{num+=1}


//task10

drop.addEventListener('click',()=>{

      document.getElementById('hidden').style.display='block'   

 
})
// drop.addEventListener('click',()=>{
//     x+=1
//     document.getElementById('hidden').style.display='none'     
// })
