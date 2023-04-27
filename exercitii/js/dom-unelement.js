//document.getElementById()
const elem = document.getElementById("listTitle");
console.log(elem);

//1. accesarea proprietatilor 
console.log(elem.id);

//2. afisarea claselor 
console.log(elem.className);

//3.schimbarea stilurilor
elem.style.background='darkBlue';
elem.style.color='white';
elem.style.display='none';

//4.schimbarea continutului 
elem.textContent='produse cumparate';
elem.innerText = 'produsele mele';
elem.innerHTML='<span style="color:green">Produse</span>';




//document.querySelector() -ne permite sa selectam un element folosind  orice selector css
console.log(document.querySelector('#listTitle'));
console.log(document.querySelector('.btn'));
console.log(document.querySelector('li'));

document.querySelector('li').style.color='green'; //schimba doar primul in cazul in care sunt mai multi de li 
document.querySelector('li:last-child').style.color='red'; //pentru ultimul

