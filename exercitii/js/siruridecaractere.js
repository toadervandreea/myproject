let nume = "voicu";
let prenume = "maria";
let numeComplet = "voicu maria";

console.log(nume[1]); //o

nume[0] = "x";
console.log(nume);  //nu se schimba nimic tot voicu ramane, nu putem schimba 

//leght-lungimea unui sir
console.log(numeComplet.length); //11
//+ += -operatori de concatenare
console.log("lungime:" + numeComplet.length); // lungime: 11
//indexOf() -putem verifica daca un sir contine alt sir
console.log(nume.indexOf("o") > -1); //true (adica var nume contine litera o)
//substring() -putem extrage un subsir dintr un sir dat
console.log(numeComplet.substring(2,5)); //icu
//substr
console.log(numeComplet.substr(2,5)); //icu M (5 reprezinta leght)
//includes() -permite sa verificam daca un sir contine alt sir 
console.log(numeComplet.includes("aria")); //true

//diferenta dintre includes() si indecOf() este ca includes() returneaza o valoare boleana


//replace() -ne permite sa inclocuim un subsir din interiorul sirului initial cu alta valoare
let sir ='apostrof, ghilimele, tab';
sir = sir.replace("apo", "xxx"); 
console.log(sir); //"xxxstrof, ghilimele, tab"

//split() -ne permite sa transformam sir intr un array pe baza unui separator
let arr = sir.split(",");
console.log(arr);

//trim() -ne permite sa eliminam toate spatiile de la inceputul si sfarsitul unui sir
let val = "  doi  ";
console.log(val, val.trim(), val.trim().length);

//cum putem pune ghilimele intr un sir 
let sir2 ='ghilimele "in" sir';
console.log(sir2);
//sau
let sir3 = "ghilimele \"mele\"in sir"
//secvente escape
// \', \", \\, \n, \r, \t, \v
let sir4 ="apostrof \', ghilimele \", newline \n, backslash \\, tab \t, verticaltab \v"
console.log(sir4);


let template = 'salur, acesta este'+
 'un sir foarte lung pentru' + 
 'a testa sabloanele';
 console.log(template);
//varianta recomandata cu backtick(interpolare)
 let template1 = `salut, ${nume} acesta este
 un sir foarte lung pentru
 a testa sabloanele;`
 console.log(template1);
