//SELECTAREA MAI MULTOR ELEMENTE 

//document.getElementsByClassName()
let items = document.getElementsByClassName('list-items');
console.log(items);
for(let i=0;i<items.length;i++){
    items[i].textContent=`element ${i+1}`;
};

Array.from(items).forEach(item=>console.log(item));


//document.getElementsByTagName()
items = document.getElementsByTagName('button');
for(let i =0;i<items.length;i++){
    items[i].classList.add('btn-blue');
}

//document.querySelectorAll()
let impare = document.querySelectorAll('li:nth-child(odd)');
Array.from(impare).forEach(e=>e.style.backgroundColor='lightblue');

let pare = document.querySelectorAll('li:nth-child(even)');
Array.from(pare).forEach(e=>e.style.backgroundColor='steelblue')
