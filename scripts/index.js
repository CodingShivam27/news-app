// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import navbar from "../components/navbar.js";
let nav=document.querySelector("#navbar");
nav.innerHTML=navbar();


import {searchC,Cdata,newsdata,search} from "../components/fetch.js"
let container=document.querySelector("#results");


let value=document.querySelector("#search_input").value;
search(value)



searchC("in").then((data)=>{
    Cdata(data,container);
})



let input=document.querySelector("#search_input").addEventListener("keydown",search);



function names(){
    console.log(this.id)
    container.innerHTML=null;
    searchC(this.id).then((data)=>{
        //console.log(data)
        Cdata(data,container);
    })
}
let h3t=document.getElementsByTagName("h3");
for (let me of h3t){
    me.addEventListener("click",names);
}