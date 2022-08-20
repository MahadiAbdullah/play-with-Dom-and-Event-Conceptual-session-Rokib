/* 
method start
*/

const tagList = document.getElementsByTagName("h2");

/* ---------------------------------- 
method 1: getElementsByTagName 
------------------------------------------*/
//    option 1: for-of loop 

//    for (const h2 of tagList){
//     console.log(h2.innerText);
//    }

// option 2 : for loop 
for (let i = 0; i < tagList.length; i++) {
    const element = tagList[i];
    // console.log(element.innerText);
}

/*------------------------------------------------ 
method 2 : getElementsByClassName
-------------------------------------------------*/
const classList = document.getElementsByClassName('test');
// console.log(classList);
for (const classTag of classList) {
    // console.log(classTag.innerText);
}

/* ----------------------------------------
method 3 : getElementById
----------------------------------------------*/
// const h1 = document.getElementById('first');
// console.log(h1.innerText);
// console.log((h1.style.color = "red"));

/*--------------------------------------------- 
method 4 : getElementByQuerySelector
------------------------------------------------*/
const element = document.querySelector('h2');
// console.log(element);

const element2 = document.querySelector('#first');
// console.log(element2);

const element3 = document.querySelectorAll('.test')[2];
// console.log(element3.innerText);

/* -----------------------------------------
method end
---------------------------------------------- */

/* ---------------------------------------
Style start 
-----------------------------------------------*/
const h1 = document.getElementById('first');
h1.style.color = 'green';
// h1.style.backgroundColor = 'tomato';
h1.style.padding = '25px';
h1.style.textAlign = 'center';
h1.style.border = '5px solid black';
/*-------------------------------------------- 
Style end
--------------------------------------*/
/* -----------------------------------------------
add and Remove class Name start
---------------------------------------------*/
// h1.classList.add('third');
// h1.classList.remove('third');
// classList hosse proparty

/*----------------------------- 
add and remove class name end
---------------------------------*/
/* ---------------------------------
create element and append child start
---------------------------------------------*/
// const div = document.getElementById('half');
// const h3 = document.createElement('h3');
// h3.innerText = 'I am from js file';
// div.appendChild(h3);
/*-------------------------------------- 
create element and append child end
----------------------------------------------*/
/* ---------------------------------------
Innner Text vs inner Html start 
----------------------------------------------*/
// const div = document.getElementById('half');
// console.log(div.innerText);
// console.log(div.innerHTML);
/* ---------------------------
Innner Text vs inner Html end
----------------------------------------*/
/* --------------------------------------
GetAttribute and setAttribute
------------------------------------------*/
// const div = document.getElementById('half');
// console.log(div.getAttribute('id'));
// vs 
// console.log(div.setAttribute('class', 'last'));
// console.log(div.setAttribute('value', 'Hello'));