"use strict";

const num=document.querySelector("#num");
const list=document.getElementById("list");
let timed;
num.textContent=0;


timed=setInterval(()=>{
    num.textContent++;
    if(num.textContent>=76)clearInterval(timed);
  
},20)
const url="./data.json"

async function fetchData(url) {
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`Network response was not ok (${response.status} ${response.statusText})`);
      }
  
      // Assuming the response contains JSON data
      const data = await response.json();
       createList(data)
    } catch (error) {
      // Handle any errors that occur during the fetch process
    //   console.error('Error fetching data:', error);
      throw error; // Propagate the error to the calling code if necessary
    }
  }
  
 
  


function createList(datas){
    console.log(datas);
 const html= datas.map((data,i)=>
    `<li class="flex li-${i+1} p-3">
        <div class="flex gap-1">
         <img src="${data.icon}" alt="icon">
        <p>${data.category}</p>
        </div>
        <p class="bold dark-blue">${data.score} <span class="bold mx-1 dark-gray">/ 100</span></p>
      </li>`).join("");
console.log(html);
      list.innerHTML=html
}

fetchData(url)

  