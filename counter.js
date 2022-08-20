// console.log('tumi koi')
// ++++ part 

let count = 0;
const plusBtn = document.getElementById('plus-btn').addEventListener('click', function(){
//  count = count + 1;
count++;
// const counter = document.getElementById('count');
// counter.innerText = count;
 document.getElementById('count').innerText = count;
})
// ---- part 



const minusBtn = document.getElementById('minus-btn').addEventListener('click', function(){
//  count = count - 1;
count--;
// const counter = document.getElementById('count');
// counter.innerText = count;
 document.getElementById('count').innerText = count;
})