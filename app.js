 // (1).  
// function closure(num) {
//   function addNumber(a) {
//     return num + a;
//   }
//   return addNumber;
// }

// let addVal = closure(5);
// let result = addVal(5);
// console.log(result);


// // (2).
// let arr = [1,2,3,4,5];
// function arraySearch(arr,val) {
//   if(arr.length === 0){
//     return false;
//   }else if(arr[0] === val){
//   return true
//   }
//   return arraySearch(arr.slice(1), val);
// }
// console.log(arraySearch(arr,2));

// (3). 

// function addParagraph(text) {
//   let para = document.createElement('p');
//   let content = document.createTextNode(text);
//   para.appendChild(content);
//   document.body.appendChild(para);
// }
// addParagraph('Hello I am a new Paragraph');

// (4);

// function addListItem(text) {
//   let ul = document.getElementById('myUl');
//   let createLi = document.createElement('li');
//   let content = document.createTextNode(text);
//   createLi.appendChild(content);
//   document.body.appendChild(createLi);
// }
// addListItem('GreenChilli');


// (5).

// let div = document.getElementById('myDiv');
// function addColor(elem, color) {
//   elem.style.backgroundColor = color;
// }
// addColor(div ,"green");


// (6) and (7).


// let myObj = {
//   name : 'Muzeef Ansari',
//   age : 18,
//   className : "Js"
// }
//   let stringify = JSON.stringify(myObj);
//   localStorage.setItem("key",stringify);

//   console.log(localStorage);

// let myObjDe = JSON.parse(localStorage.getItem('key'))
// console.log(myObjDe);

// (8).

// function saveObjectToLocalStorage(obj) {
//   for (let prop in obj) {
//     localStorage.setItem(prop, obj[prop]);
//   }

//   let reObj = {};

//   for (let i = 0; i < localStorage.length; i++) {
//     let key = localStorage.key(i);
//     let value = localStorage.getItem(key);
//     reObj[key] = value;
//   }

//   return reObj;

// }


