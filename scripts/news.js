// Ude Import export (MANDATORY)

import navbar from "../components/navbar.js";
let nav=document.querySelector("#navbar");
nav.innerHTML=navbar();

import {searchC,Cdata,newsdata} from "../components/fetch.js";

let data=JSON.parse(localStorage.getItem("news"));

let container=document.querySelector("#detailed_news");

newsdata(data,container);




