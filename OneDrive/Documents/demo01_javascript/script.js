'use strict';


console.log('Bisextile ');
const nb=parseInt(prompt("Entrez un année"))
const paraBisextile=document.getElementById("bisextile")
const bisextile=(nb%4===0 && nb%100!=0) || (nb%400===0) ? paraBisextile.innerHTML= `l\'année ${nb} est bisextile`:`paraBisextile.innerHTML='${nb} n\'est pas bisextile`;