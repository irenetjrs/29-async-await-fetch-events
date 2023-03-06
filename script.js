'use strict'

// task 1

function getData (url){
   let result = fetch(url);
   let title = [];
   result.then(response => {
            if(response.ok){
               return response.json();
            }
            throw new Error(`Error: ${response.status}`);
         })
         .then((data) => {
         for(let item of data){
            if(item.title[0]==='a'){
               title.push(item);
            }
         }
      });
      console.log(title);
   };
getData('https://jsonplaceholder.typicode.com/todos');

// task 2

async function getAsyncData (url){
   try{
      let result = await fetch(url);
   if(result.ok){
      let response = await result.json();
         let title = [];
         for(let item of response){
            if(item.title[0]==='a'){
               title.push(item);
            }
         }
         console.log(title);
      }
   }
      catch(error){
         console.log(error.message);
      }
   };
getAsyncData('https://jsonplaceholder.typicode.com/todos');

// task 3

let userA = document.querySelector('.user-a');
let userAB = document.querySelector('.user-ab');
async function getAsyncData(url){
   try{
   let result = await fetch(url);
   if(result.ok){
      let response = await result.json();
         let filterA = response.filter((item) => item.title[0]==='a');
            filterA.forEach((elem) => {
               let divA = document.createElement('div');
               divA.textContent = JSON.stringify(elem);
               userA.append(divA);
            });
         console.log(userA);
            let filterAB = filterA.filter((item) => item.title[0]==='a' && item.title[1]==='b');
            filterAB.forEach((elem) => {
               let divAB = document.createElement('div');
               divAB.textContent = JSON.stringify(elem);
               userAB.append(divAB);
            });
      console.log(userAB);
      }
   }catch(error){
         console.log(error.message);
      }
   };
getAsyncData('https://jsonplaceholder.typicode.com/todos');

// task 4

const btn1 = document.querySelector('.add-a');
const btn2 = document.querySelector('.add-ab');
const btn3 = document.querySelector('.add-a');
console.log(btn1);
async function getAsyncData1(url){
   try{
   let result = await fetch(url);
   if(result.ok){
      let response = await result.json();
         let filterA = response.filter((item) => item.title[0]==='a');
            
         btn1.addEventListener('click', aList);
            
            function aList(){
               filterA.forEach((elem) => {
               let divA = document.createElement('div');
               divA.textContent = JSON.stringify(elem);
               userA.append(divA);
            });
            }

            btn2.addEventListener('click', abList);
            
            function abList(){
            let filterAB = filterA.filter((item) => item.title[0]==='a' && item.title[1]==='b');
            filterAB.forEach((elem) => {
               let divAB = document.createElement('div');
               divAB.textContent = JSON.stringify(elem);
               userAB.append(divAB);
            });
         }
            btn3.addEventListener('click', all);
            function all(){
               aList();
               abList();
            }
      }
   }catch(error){
         console.log(error.message);
      }
   }
getAsyncData1('https://jsonplaceholder.typicode.com/todos');
