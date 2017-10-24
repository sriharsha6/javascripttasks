// var array = ["a","b","c"];
// var iterator = array.entries();
// console.log(iterator);
// iterator.forEach(function(element) {
//   console.log(element);
// });
// var array = ["a","b","c"];
// [
//   [0,‘a’],[0]
// // ]
// var array = ["a","b","c"];
// for(var item of array){
//   console.log(item);
// }
// for(var item in array){
//   console.log(item);
// }


// let array = ["Digital", "Lync", "Academy", "Technology" ,"Javascript", "Class",2,34,6];

// let a = array[0];
// let b = array[1];
// let c = array[2];

// console.log(a,b,c);

// var [x,y,...z] = array;
// console.log(x);

//  console.log(x,y,z);

//  let obj = [{id:23, name:“Hari”, course:‘Javascript’, completed:false},{id:23, name:“NAveen”, course:‘Javascript’, completed:true}];

// console.log(obj.name);





// function coursecompleted(obj) {
//   let id = 45;
// var {id:x,course, completed} = obj;
// if(completed==true && id == 45){
//   console.log(x + ” Couser ” +course+  “has been completed”);
// }else{
//   console.log(x + ” Couser ” +course+  “has not completed”);
// }

// }

// coursecompleted(obj[1]);

// function fun(a, b, ...h) {
//   console.log(a, b, h);
// }

// shift():-
// var fruits=['apple','bananna'];
// var newLength = fruits.shift();
// console.log(fruits);

// unshift():-
// var fruits=['apple','bananna'];
// var newLength = fruits.unshift('mango');
// console.log(fruits);

// Array.of():-
//   var a=Array.of(1,2,3);
//   var b=Array.of(4)
//   console.log(a);
//   console.log(b);

//Array.concat():-
// var arr1 = ['a', 'b', 'c'];
// var arr2 = ['d', 'e', 'f'];
// var arr3 = arr1.concat(arr2);
// console.log(arr3);


// var alpha = ['a', 'b', 'c'];
// var numeric = [1, 2, 3];
// var arrs=alpha.concat(numeric);
// console.log(arrs);

// Array.copywithin():-
// var fruits= ["Banana", "Orange", "Apple", "Mango"]
 // console.log(fruits.copyWithin(1,2)); 
// console.log(fruits.copyWithin(1));


//Array.entries:-
// var a = ['a', 'b', 'c'];
// var iterator = a.entries();
// console.log(iterator.next().value);
// console.log(iterator.next().value); 
// console.log(iterator.next().value);

// var a = ['a', 'b', 'c'];
// var iterator = a.entries();
// for (let e of iterator) {
//   console.log(e);
// }

//Array.every():-
// function isBigEnough(element, index, array) { 
//   return element >= 10; 
// } 

//Promise function():-
// function one() {

//     new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Hi")
//             resolve(1)
//         }, 2000);
//     }).then(() => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 console.log("welcome");
//                 resolve(1);
//             }, 4000);
//         }).then(() => {
//             new Promise((resolve, reject) => {
//                 console.log("to");
//                 resolve(1)
//             }).then(() => {
//                 console.log("Digital Lync")
//             })
//         })
//     })
// }

//tasks in slack:-
// this.winvar = 10;
// var obj = {
//  winvar:20,
//  getwinvar:function(){
//   console.log(this.winvar)
//  }
// }

// obj.getwinvar();
// var extvar = obj.getwinvar;

// extvar();

//objects:-
// var person = {
// name: "Max",
// age : 30
// }
// var anotherPerson = Object.create(person);
// anotherPerson.age = 20
// console.log(anotherPerson.age);
// console.log(anotherPerson.name);

// //Split method
// var str = "www.fb.com/posts/timeline/1"
// var splitStr = str.split('/');
// console.log(splitStr);
// splitStr.forEach(function(element) {
//     console.log(element)
//     if (element == "timeline") {
//         console.log(true)
//     }

// });

// //trim method
// var str1 = "                            John Doe is a full stack developer                                 something something";
// console.log(str1);
// var trimStr1 = str1.trim();
// console.log(trimStr1)

//task2:-
// my_array = [
//  {id: 1,name: "sri"},
//  {id: 2,name: "harsha"}
// ];
// let my_obj = {};
// my_array.forEach((elem) => {
// my_obj[elem.id] = elem.name;
// if(elem.id==1){
// 	console.log(elem.name);
// }
// });
