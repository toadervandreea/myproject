//var, let, const
// let nume = "daniel";
// console.log(nume);
// nume = "Anca";
// console.log(nume);
// let mesaj;
// mesaj = "salut";
// console.log(mesaj);
// //reguli de denumire a variabilelor 
// //1.litere, cifre, _,$
// //2. numele nu poate incepe cu o cifra 

// //nume de variabila compus
// let firstName ="Cristi" //camel case 
// let first_name = "daniel" //underscore
// let FirstName = "Anca" //pascal case


//CONST
// const nume ="Ion";
// console.log(nume);
// nume = "petre";
// console.log(nume); //o sa primesti eroare deoarece const a fost definita si nu accepta sa fie redefinita
//constamta trebuie initializata 
//nu putem declara contanta si sa ii atribuim valoare pe un alt rand 
    //ex: const mesaj;
    //    const mesaj = "buna";

//exemplu in care putem folosi const cu array 
const numere =[1,2,3];
console.log(numere);
numere[0]=13;
numere.push(34);
console.log(numere);
//putem modifica continutul array ului dar nu putem atribui variabilei alta valoare

