//tranversarea DOM-ului se refera la cum putem sa ne mutam de la nodul 
//sau elementul curent la parintele, copii sau nodurile de pe acelasi nivel al ierarhiei 

//tranversarea in sus 
//1. parentElement
let primul = document.querySelector('li');
const parinte = primul.parentElement;
console.log(parinte);

const bunic = parinte.parentElement;
console.log(bunic);

//2.closest() -selectam cel mai apropiat stramos a elementului curent
const icon = document.querySelector('i');
const lista = icon.closest('ul');
console.log(lista);


//tranversarea in lateral
//nextElementSibling

while(primul){
    console.log(primul.textContent);
    primul = primul.nextElementSibling;
}
console.log('gata');

//previousElementSibling
let ultimul = parinte.lastElementChild;
while(primul){
    console.log(ultimul.textContent);
    primul = ultimul.previousElementSibling;
}
console.log('gata');

//tranversarea in jos
//children
console.log(parinte.children);
console.log(parinte.children[0]);


