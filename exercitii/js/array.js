let numere = [1,2,3, "pattru", false];
console.log(numere);


//leght- numarul de elemente
console.log(`lungime: ${numere.length}`); //lungime:5

numere[0]=5;
console.log(numere); // se schimba primul element

//daca vrem sa accesam ultimul element din array
numere[numere.length-1] =true;
console.log(numere);

for(let i=0; i< numere.length; i++){
    console.log(numere[i]);
}
//push() -adauga elemente la sfarsitul array ului
numere.push(7);

//unshift() - adauga un element la inceputul array ului
numere.unshift(25);
console.log(numere);

//shift -scoate un element de la inceputul array ului
let num = numere.shift();
//pop -scoate un element de la sfasritul array ului
let ultimul = numere.pop();
console.log(numere);
console.log(num, ultimul);


//indexOf() -aflam pozitia unui element dintr un array
let pos = numere.indexOf(2);
console.log(numere, pos);

//splice() -scoate un element din array pe baza pozitiei
let elementeScoase = numere.splice(1,1); //primul parametru reprezinta de unde vrem sa incepem si al doilea cate elemente vrem sa scoatem
console.log(numere, elementeScoase);

//join() -ne permite sa unim toate elementele unui array intr un string folosind un separator
let arr =["unu", "doi", "trei"];
console.log(arr);

let sir = arr.join(",");
console.log(sir);

//reverse() -inverseaza ordinea elementelor dintr un array
arr.reverse();
console.log(arr);